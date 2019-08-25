import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sliding-image-create',
  templateUrl: './sliding-image-create.component.html',
  styleUrls: ['./sliding-image-create.component.css']
})
export class SlidingImageCreateComponent implements OnInit {

  imageUrl: string;
  fileToUpload: File = null;
  baseurl = 'http://eventmandu.com';

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    $('#img').fadeIn(200);
    this.uploadImageToServer($('#create-slider'));
  }

  constructor() {
  }

  ngOnInit() {
  }


  uploadImageToServer(imageUploadSelector) {
    console.log(imageUploadSelector);
    const formData = new FormData();
    const files = imageUploadSelector.get(0).files;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    const fileDetails = imageUploadSelector[0].files[0];
    const fileSize = fileDetails.size;

    if (fileSize > 10000000) {
      $('#comment-validation').removeClass('alert-success');
      $('#comment-validation').addClass('alert-danger').fadeIn(100);
      $('#comment-validation').text('Failed to upload, image size larger, please resize it');
      $('#comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#comment-validation').fadeOut(1000);
      }, 2000);
    } else {

      $.ajax({
        type: 'POST',
        url: this.baseurl + '/sliding_image/upload/image/sliding',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data);
          $('#sliding-image').val(data);
        },
        error() {

          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Failed to upload, something went wrong');
          $('#comment-validation').fadeIn(100);
          setTimeout(function (){
            $('#comment-validation').fadeOut(1000);
          }, 2000);

        }
      });
    }
  }

  slidingImageFormSubmit() {
    const imageValue = $('#sliding-image').val();
    const titleValue = $('#sliding-title').val();
    const subtitleValue = $('#subtitle').val();

    if (imageValue === '') {
      $('#sliding-title').focus();

      $('#comment-validation').removeClass('alert-success');
      $('#comment-validation').addClass('alert-danger').fadeIn(100);
      $('#comment-validation').text('Please select an image');
      $('#comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#comment-validation').fadeOut(1000);
      }, 2000);

    } else if (titleValue === '') {
      $('#sliding-title').focus();
      $('#sliding-title').attr('placeholder', 'Please enter a Title *');
      $('#email').css({ border: '2px solid red' });
    } else if (subtitleValue === '') {
      $('#subtitleValue').focus();
      $('#subtitleValue').attr('placeholder', 'Please enter a SubTitle *');
      $('#subtitleValue').css({ border: '2px solid red' });
    } else {
      const data = {
        image: imageValue,
        slider_title: titleValue,
        sub_title: subtitleValue,
      };

      $.ajax({
        type: 'POST',
        url: this.baseurl + '/sliding_image/addImageSlider',
        data,
        success(res) {
          if (res) {

            $('#sliding-title').focus();

            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').addClass('alert-success').fadeIn(100);
            $('#comment-validation').text('Sliding image details succesfully added');
            $('#comment-validation').fadeIn(100);
            setTimeout(function () {
              $('#comment-validation').fadeOut(1000);
            }, 2000);

            setTimeout(function () {
              window.location.reload();
            }, 2000);
          }
        },
        error() {
          alert('error');
        }
      });
    }
  }
}
