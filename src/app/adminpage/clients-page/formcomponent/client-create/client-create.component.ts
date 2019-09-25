import { AppServiceService } from './../../../../app-service.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {


  imageUrl: string;
  imageSize: string;
  fileToUpload: File = null;
  // baseurl = 'https://eventmandu.com';
  //  baseurl = 'http://localhost:1954';
  baseurl = this.BASE_URL.publishBaseUrl();

  constructor(private BASE_URL: AppServiceService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    this.uploadImageToServer($('#create-clients'));
    $('#img').fadeIn(200);
  }

  clientsFormSubmit(name, comment, company) {
    const nameValue = name.value;
    const commentValue = comment.value;
    const companyValue = company.value;

    if (nameValue === '') {
      $('#clientName').attr('placeholder', 'Please enter a name *');
      $('#clientName').focus();
      $('#clientName').css({ border: '2px solid red' });

    } else if (commentValue === '') {
      $('#clientComment').attr('placeholder', 'Please enter company name *');
      $('#clientComment').focus();
      $('#clientComment').css({ border: '2px solid red' });

    } else if (companyValue === '') {
      $('#company').attr('placeholder', 'Please enter a name *');
      $('#company').focus();
      $('#company').css({ border: '2px solid red' });
    } else {
      const data = {
        client_name: nameValue,
        image: $('#clients-image-name').val(),
        comment: commentValue,
        company: companyValue
      };

      $.ajax({
        type: 'POST',
        url: this.baseurl + 'clients/addClients',
        data,
        success(res) {
          if (res) {
            $('#clientName').focus();
            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').addClass('alert-success').fadeIn(100);
            $('#comment-validation').text('Services successfully uploaded');
            $('#comment-validation').fadeIn(100);

            setTimeout(function () {
              $('#clientName').focus();
              $('#comment-validation').fadeOut(1000);
            }, 2000);
            setTimeout(function () {
              window.location.reload();
            }, 2000);

          }
        },
        error() {
          $('#clientName').focus();
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Something went wrong, unable to upload');
          $('#comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);

        }
      });

    }

  }

  uploadImageToServer(imageUploadSelector) {
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
        url: this.baseurl + 'clients/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log('client image' + data)
          $('#clients-image-name').val(data);
        },
        error(error) {
          console.log(error)
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Image upload failed');
          $('#comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);

        }
      });
    }
  }



}
