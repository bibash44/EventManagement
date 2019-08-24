import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

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
