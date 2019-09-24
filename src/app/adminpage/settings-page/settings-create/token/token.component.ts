import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  validatePwd() {
    const password = $('#validatePassword').val();
    const id = 1;
    const data = {
      id,
      password
    };
    $.ajax({
      type: 'GET',
      url: this.baseurl + '/settings/validatePassword',
      data,
      success(res) {
        if (res) {
          $('#tokenField').fadeIn(10);
          $('#validatePasswordSection').fadeOut(10);
        } else {
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger').fadeIn(100);
          $('#comment-validation').text('Invalid token');
          $('#comment-validation').fadeIn(100);

          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);
        }
      },
      error() {

      }

    });
  }

  generateToken() {
    const generatedToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    $('#newToken').val(generatedToken);

    $('#comment-validation').removeClass('alert-danger');
    $('#comment-validation').addClass('alert-success').fadeIn(100);
    $('#comment-validation').text('Please copy and save the token');
    $('#comment-validation').fadeIn(100);
    $('#copyToken').fadeIn(100);
    $('#generateToken').text('Generate new token');

    setTimeout(function () {
      $('#comment-validation').fadeOut(100);
    }, 10000);
  }

  updateToken() {
    const token = $('#newToken').val();
    if (token == '') {
      $('#title').focus();
      $('#title').attr('placeholder', 'Please enter the password');
      $('#title').css({border: '2px solid red'});
    } else {
      const data = {
        token,
        rndv: 'noddypeak'
      };

      $.ajax({
        type: 'PUT',
        url: this.baseurl + '/settings/updateToken',
        data,
        success(res) {
          if (res) {
            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').addClass('alert-success').fadeIn(100);
            $('#comment-validation').text('Token saved');
            $('#comment-validation').fadeIn(100);

            setTimeout(function () {
              $('#comment-validation').fadeOut(1000);
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
  constructor() { }

  ngOnInit() {
  }

}
