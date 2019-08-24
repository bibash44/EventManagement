import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

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
