import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {

  imageUrl: string;
  fileToUpload: File = null;
  imagename = null;
  baseurl = 'http://eventmandu.com';

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    $('#img').fadeIn(200);
    this.uploadImageToServer($('#create-services'));
  }

  constructor() {
  }

  ngOnInit() {
    $('#type').val('Select Type');
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
        url: this.baseurl + '/services/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          $('#imagename').val(data);
        },
        error() {
          $('#comment-validation').addClass('alert-danger');
          $('#comment-validation').removeClass('alert-success').fadeIn(100);
          $('#comment-validation').text('Something went wrong, failed to upload image');
          $('#comment-validation').fadeIn(100);

          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }


  servicesFormSubmit(type, image, title, packageDescription) {
    const typeValue = type.value;
    const imageValue = image.value;
    const titleValue = title.value;
    const packageDescriptionValue = packageDescription.value;

    if (typeValue == 'Select Type' || typeValue == '') {
      $('#title').focus();
      $('#comment-validation').addClass('alert-danger');
      $('#comment-validation').removeClass('alert-success').fadeIn(100);
      $('#comment-validation').text('Please select type');
      $('#comment-validation').fadeIn(100);

      setTimeout(function () {
        $('#comment-validation').fadeOut(1000);
      }, 2000);


    } else if (imageValue == '') {
      $('#title').focus();
      $('#comment-validation').addClass('alert-danger');
      $('#comment-validation').removeClass('alert-success').fadeIn(100);
      $('#comment-validation').text('Please select image');
      $('#comment-validation').fadeIn(100);


      setTimeout(function () {
        $('#comment-validation').fadeOut(1000);
      }, 2000);

    } else if (titleValue == '') {
      $('#title').focus();
      $('#title').attr('placeholder', 'Please enter a Title *');
      $('#title').css({ border: '2px solid red' });
    } else if (packageDescriptionValue === '') {
      $('#packageDescription').attr('placeholder', 'Please enter package description *');
      $('#packageDescription').focus();
      $('#packageDescription').css({ border: '2px solid red' });
    } else {
      const data = {
        type: typeValue,
        image: $('#imagename').val(),
        title: titleValue,
        description: packageDescriptionValue
      };

      $.ajax({
        type: 'POST',
        url: this.baseurl + '/services/addServices',
        data,
        success(res) {
          if (res) {
            $('#title').focus();
            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').addClass('alert-success').fadeIn(100);
            $('#comment-validation').text('Services successfully uploaded');
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

}
