import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  email: string = '';

  adminLogin(email, password) {
    let emailLogin = email.value;
    let passwordLogin = password.value;

    if (emailLogin == '') {
      $('#email-validation').text('Please enter your email *');
      $('#email').focus();

    } else if (!emailLogin.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')) {
      $('#email-validation').text('Please enter valid email *');
      $('#email').val('')
      $('#email').focus();
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
