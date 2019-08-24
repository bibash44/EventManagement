import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let checkSession = localStorage.getItem('success_login');
    if (checkSession == 'session_verified') {
      // valid login
    }

    else {
      alert('Access Deninded, please login to verify');
      window.location.href = 'admin/login';
    }

  }

}
