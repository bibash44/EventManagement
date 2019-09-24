import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {


  validateToken() {
    const token = $('#validateToken').val();
    const id = 1;
    const data = {
      id,
      token
    };
    $.ajax({
      type: 'GET',
      url: 'https://localhost:1954/settings/validateToken',
      data,
      success(res) {
        if (res) {
          $('#passwordField').fadeIn(10);
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
        $('#comment-validation').removeClass('alert-success');
        $('#comment-validation').addClass('alert-danger').fadeIn(100);
        $('#comment-validation').text('Something went wrong.');
        $('#comment-validation').fadeIn(100);

        setTimeout(function () {
          $('#comment-validation').fadeOut(1000);
        }, 2000);
      }

    });
  }

  comparePassword() {
    const password = $('#newPassword').val();
    const cpassword = $('#confirmPassword').val();

    if (password != cpassword) {
      $('#confirmPassword').attr('placeholder', 'Password did not match');
      $('#confirmPassword').focus();
      $('#confirmPassword').css({border: '2px solid red'});
    }
  }

  updateNewPassword() {
    const password = $('#newPassword').val();
    const cpassword = $('#confirmPassword').val();
    if (password == '' || cpassword == '') {
      $('#title').focus();
      $('#title').attr('placeholder', 'Please enter the password');
      $('#title').css({border: '2px solid red'});
    } else if (password != cpassword) {
      $('#confirmPassword').attr('placeholder', 'Password did not match');
      $('#confirmPassword').focus();
      $('#confirmPassword').css({border: '2px solid red'});
    } else {
      const data = {
        id: 1,
        password,
        rndv: 'noddypeak'
      };

      $.ajax({
        type: 'PUT',
        url: 'https://localhost:1954/settings/updatePassword',
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
