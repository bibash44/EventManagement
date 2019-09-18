import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  name = '';
  comment = '';
  imagename = '';
  // tslint:disable-next-line: no-inferrable-types
  base_url: string = 'https://eventmandu.com/';

  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    // tslint:disable-next-line: curly
    if (files.length === 0)
      return;

    // tslint:disable-next-line: prefer-const
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // tslint:disable-next-line: quotemark
      this.message = "Only images are supported.";
      return;
    }

    // tslint:disable-next-line: prefer-const
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }

    this.uploadImageToServer($('#image'));
  }


  uploadImageToServer(imageUploadSelector) {
    console.log(imageUploadSelector);
    let formData = new FormData();
    let files = imageUploadSelector.get(0).files;
    if (files.length > 0) {
      formData.append("image", files[0]);
    }

    var fileDetails = imageUploadSelector[0].files[0]
    var fileSize = fileDetails.size;

    if (fileSize > 10000000) {
      $('#comment-validation').removeClass('alert-success').fadeIn(100);
      $('#comment-validation').addClass('alert-danger').fadeIn(100);
      $('#comment-validation').text('Failed to upload, image size larger, please resize it');
      $('#comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#comment-validation').fadeOut(1000);
      }, 2000);
    }

    else {

      $.ajax({
        type: 'POST',
        url: this.base_url + 'review/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success: function (data) {
          console.log(data)
          $('#imagename').val(data.image);
        },
        error: function () {
          $('#comment-validation').removeClass('alert-success').fadeIn(100);
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Failed to upload image, something went wrong');
          $('#comment-validation').fadeIn(100);
        }
      });
    }
  }


  commentFormSubmit(name, comment) {
    // tslint:disable-next-line: prefer-const
    let nameValue = name.value;
    let commentValue = comment.value;
    let imageValue = $('#imagename').val();

    // console.log("get image name "+imageValue);

    // tslint:disable-next-line: triple-equals
    if (nameValue == '') {
      $('#name').attr('placeholder', 'Please enter a name *');
      $('#name').focus();
      $('#name').css({ 'border': '2px solid red' });
    }


    else if (!nameValue.match('^[A-Z a-z a-z A-Z]{3,16}$')) {
      $('#name').val('');
      $('#name').attr('placeholder', 'Please enter a valid name');
      $('#name').focus();
      $('#name').css({ 'border': '2px solid red' });

    }

    else if (commentValue == '') {
      $('#comment').attr('placeholder', 'Please enter a  comment *');
      $('#comment').focus();
      $('#comment').css({ 'border': '2px solid red' });

    } else {

      this.name = nameValue;
      this.comment = commentValue;

      console.log(this.imagename);

      $.ajax({
        url: this.base_url + 'review',
        type: 'POST',
        data: {
          name: this.name,
          comment: this.comment,
          image: imageValue
        },
        success: function (res) {
          var database_failed = res.database_failed;
          var success = res.success;

          console.log(res)

          if (database_failed == false) {
            $('#comment-validation').removeClass('alert-success').fadeIn(100);
            $('#comment-validation').addClass('alert-danger').fadeIn(100);
            $('#comment-validation').text('Failed to comment');
            $('#comment-validation').fadeIn(100);

            setTimeout(function () {
              $('#comment-validation').fadeOut(100);
            }, 2000);
          }

          else if (success == true) {
            $('#name').focus();
            $('#comment-validation').addClass('alert-success');
            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').text('Comment recorded');

            $('#comment-validation').fadeIn(100);

            setTimeout(function () {
              $('#comment-validation').fadeOut(100);
              window.location.reload();
            }, 2000);

          }
        },
        error: function () {

          $('#comment-validation').removeClass('alert-success').fadeIn(100);
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Something went wrong, please try again');

          $('#comment-validation').fadeIn(100);

          setTimeout(function () {
            $('#comment-validation').fadeOut(100);
          }, 2000);
        }
      })

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
