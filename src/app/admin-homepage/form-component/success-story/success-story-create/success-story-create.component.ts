import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-success-story-create',
  templateUrl: './success-story-create.component.html',
  styleUrls: ['./success-story-create.component.css']
})
export class SuccessStoryCreateComponent implements OnInit {

  imageUrl: string;
  fileToUpload: File = null;
  baseurl = 'http://localhost:1954';

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    $('#success-story-image-display').fadeIn(200);
    this.uploadImageToServer($('#create-success-story'));
  }

  successStoryFormSubmit() {
    const imageValue = $('#success-story-image').val();
    const titleValue = $('#success-story-title').val();


    if (imageValue === '') {
      alert('Please select an image*');
    } else if (titleValue === '') {
      $('#success-story-title').attr('placeholder', 'Please enter a Title');
      $('#success-story-title').focus();
      $('#success-story-title').css({border: '2px solid red'});
    } else {
      const data = {
        title: titleValue,
        image: imageValue
      };

      $.ajax({
        type: 'POST',
        url: this.baseurl + '/success_story/addSuccessStory',
        data,
        success(res) {
          if (res) {
            setTimeout(function () {
              $('#comment-validation').removeClass('alert-danger');
              $('#comment-validation').addClass('alert-success').fadeIn(100);
              $('#comment-validation').text('Services to the home screen added successfully');
              $('#comment-validation').fadeIn(100);
              $('#comment-validation').focus();
            }, 3000);
            setTimeout(function () {
              window.location.reload();
            }, 3000);
          }
        },
        error() {
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Something went wrong.');
          $('#comment-validation').fadeIn(100);
        }
      });
    }
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
        url: this.baseurl + '/success_story/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data);
          $('#success-story-image').val(data);
        },
        error() {

        }
      });
    }
  }


  constructor() {
  }

  ngOnInit() {
  }


}