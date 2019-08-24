import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {

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
