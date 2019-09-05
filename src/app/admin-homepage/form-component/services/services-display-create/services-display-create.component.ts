import { AppServiceService } from './../../../../app-service.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-services-display-create',
  templateUrl: './services-display-create.component.html',
  styleUrls: ['./services-display-create.component.css']
})
export class ServicesDisplayCreateComponent implements OnInit {

  imageUrl: string;
  fileToUpload: File = null;
  // baseurl = 'https://eventmandu.com';
  baseurl = this.BASE_URL.publishBaseUrl();

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    $('#home-service-image-display').fadeIn(200);
    this.uploadImageToServer($('#create-services'));
  }

  homeServicesFormSubmit() {
    const imageValue = $('#home-service-image').val();
    const titleValue = $('#home-service-title').val();


    if (imageValue === '') {
      alert('Please select an image*');
    } else if (titleValue === '') {
      $('#title').attr('placeholder', 'Please enter a Title *');
      $('#title').focus();
      $('#title').css({ border: '2px solid red' });
    } else {
      const data = {
        services_title: titleValue,
        image: imageValue
      };

      $.ajax({
        type: 'POST',
        url: this.baseurl + '/home/addHomeServices',
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
        url: this.baseurl + '/services_home/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data);
          $('#home-service-image').val(data);
        },
        error() {
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Failed to upload, something went wrong');
          $('#comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }


  constructor(private BASE_URL: AppServiceService) {
  }

  ngOnInit() {
  }


}
