import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  base_url: string = 'https://eventmandu.com/';
  getPassword(email) {
    let emailLogin = email.value;
    if (emailLogin == '') {
      $('#email-validation').css({ 'color': 'red' });
      $('#email-validation').text('Please enter your email *');
      $('#email').focus();

    } else if (!emailLogin.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')) {
      $('#email-validation').css({ 'color': 'red' });
      $('#email-validation').text('Please enter valid email *');
      $('#email').val('')
      $('#email').focus();
    }

    else {
      $.ajax({
        url: this.base_url + 'checkemail',
        type: 'POST',
        data: {
          email: emailLogin
        },
        success: function (data) {
          if (data == true) {
            $('#email-validation').css({ 'color': 'green' });
            $('#email-validation').text('New Password Requested, check your email and login');
          }

          else {
            $('#email-validation').css({ 'color': 'red' });
            $('#email-validation').text('Invalid username');
            $('#email').val('');
            $('#email').focus();
          }
        },
        error: function (err) {
          $('#email-validation').css({ 'color': 'red' });
          $('#email-validation').text('Something went wrong please try again');
        }
      });
    }
  }


  adminLogin(email, password) {
    let emailLogin = email.value;
    let passwordLogin = password.value;

    if (emailLogin == '') {
      $('#email-validation').css({ 'color': 'red' });
      $('#email-validation').text('Please enter your email *');
      $('#email').focus();

    } else if (!emailLogin.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')) {
      $('#email-validation').css({ 'color': 'red' });
      $('#email-validation').text('Please enter valid email *');
      $('#email').val('')
      $('#email').focus();
    }

    else if (passwordLogin == '') {
      $('#password-validation').css({ 'color': 'red' });
      $('#password-validation').text('Please enter your password *');
      $('#password').focus();

    }
    else {
      $.ajax({
        url: this.base_url + 'login',
        type: 'POST',
        data: {
          email: emailLogin,
          password: passwordLogin
        },
        success: function (data) {
          if (data == true) {
            // $('#email-validation').css({ 'color': 'green' });
            // $('#email-validation').text('Success Login');
            // $('#password-validatioin').text('');

            window.location.href = '/admin';
            localStorage.setItem('success_login', 'session_verified');
          }

          else {
            $('#email-validation').css({ 'color': 'red' });
            $('#email-validation').text('Invalid username name and password');
            $('#email').focus();
            $('#password-validation').text('');
          }
        },
        error: function (err) {
          $('#email-validation').css({ 'color': 'red' });
          $('#email-validation').text('Something went wrong please try again');
        }
      })
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
