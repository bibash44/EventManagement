import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {


  activenavhome = '';
  activenavclient = '';
  activenavcontact = '';
  activenavservice = '';
  activenavportfolio = '';
  activenavreview = '';
  activenavabout = '';


  logoutAdmin() {
    var confirmLogout = confirm('Are you sure to logout ?');
    if (confirmLogout) {
      window.localStorage.setItem('success_login', '');
      window.location.href = 'admin/login';
    }
    else {
      //do nothing
    }
  }

  openNav() {
    $('#navbarSupportedContent').fadeToggle(500);

  }

  constructor(private adminRouteDetails: ActivatedRoute) { }


  @HostListener('window:scroll', [])
  onWindowScroll() {


    var scroll = window.scrollY;

    if (scroll > 80) {
      $('#nav-container').css({ position: 'fixed' });

      $('#nav-container').addClass('animated');
      $('#nav-container').addClass('slideInDown');
      $('#nav-container').removeClass('slideInUp');

      $('#main-nav-bar').removeClass('p-2');
      $('#main-nav-bar').addClass('p-1');
    }

    // tslint:disable-next-line: one-line
    else if (scroll < 80) {
      $('#nav-container').css({ position: 'static' });

      $('#nav-container').removeClass('animated');
      $('#nav-container').removeClass('slideInDown');
      $('#nav-container').addClass('slideInUp');

      $('#main-nav-bar').removeClass('p-1');
      $('#main-nav-bar').addClass('p-2');
    }
  }


  ngOnInit() {

    this.adminRouteDetails
      .data
      .subscribe(data => {
        this.activenavhome = data.activehome;
        this.activenavclient = data.activeclient;
        this.activenavcontact = data.activecontact;
        this.activenavservice = data.activservice;
        this.activenavportfolio = data.activeportfolio;
        this.activenavreview = data.activepreview;
        this.activenavabout = data.aboutactive;
      });
  }

}
