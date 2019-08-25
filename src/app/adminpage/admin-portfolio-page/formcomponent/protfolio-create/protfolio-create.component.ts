import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-protfolio-create',
  templateUrl: './protfolio-create.component.html',
  styleUrls: ['./protfolio-create.component.css']
})
export class ProtfolioCreateComponent implements OnInit {

  imageUrl: string;
  fileToUpload: File = null;
  baseurl = 'http://eventmandu.com';

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    $('#img').fadeIn(200);
    this.uploadImageToServer($('#create-portfolio'));
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
        url: this.baseurl + '/portfolio/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data);
          $('#imagename').val(data);
        },
        error() {
          $('#occasiontype').focus();
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Failed to upload image');
          $('#comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);

        }
      });
    }
  }

  portfolioFormSubmit(occasiontype, image) {
    const occasiontypeValue = occasiontype.value;
    const imageValue = image.value;

    if (occasiontypeValue === 'Select Type') {
      $('#comment-validation').removeClass('alert-success');
      $('#comment-validation').addClass('alert-danger').fadeIn(100);
      $('#comment-validation').text('Please select a type');
      $('#comment-validation').fadeIn(100);

    } else if (imageValue === '') {
      $('#occasiontype').focus();
      $('#comment-validation').removeClass('alert-success');
      $('#comment-validation').addClass('alert-danger').fadeIn(100);
      $('#comment-validation').text('Please select an image');
      $('#comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#comment-validation').fadeOut(1000);
      }, 2000);

    } else {
      const data = {
        type: occasiontypeValue,
        image: $('#imagename').val()

      };

      $.ajax({
        type: 'POST',
        url: this.baseurl + '/portfolio/addPortfolio',
        data,
        success(res) {
          if (res) {
            $('#occasiontype').focus();
            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').addClass('alert-success').fadeIn(100);
            $('#comment-validation').text('Portfolio successfully uploaded');
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
          $('#occasiontype').focus();
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Something went wrong');
          $('#comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }


  constructor() {
  }

  ngOnInit() {
  }

}
