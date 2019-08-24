import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

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
