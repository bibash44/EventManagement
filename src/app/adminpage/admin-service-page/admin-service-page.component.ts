import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-service-page',
  templateUrl: './admin-service-page.component.html',
  styleUrls: ['./admin-service-page.component.css']
})
export class AdminServicePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let checkSession = localStorage.getItem('success_login');
    if (checkSession == 'session_verified') {
      $('#main-page-items').fadeIn(10);

    }

    else {
      alert('Access denied, please login to verify');
      window.location.href = 'admin/login';
    }
  }

}
