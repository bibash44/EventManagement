import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar-header',
  templateUrl: './nav-bar-header.component.html',
  styleUrls: ['./nav-bar-header.component.css']
})
export class NavBarHeaderComponent implements OnInit {

  activenavhome = '';
  activenavclient = '';
  activenavcontact = '';
  activenavservice = '';
  activenavportfolio = '';



  openNav() {
    $('#navbarSupportedContent').fadeToggle(500);
    // $('#site-logo').fadeOut();
  }


  showSearchInput() {
    $('#search-bar').fadeToggle(500);
    $('#txt-nav-bar-search').focus();


  }

  constructor(private routeDetails: ActivatedRoute) { }



  @HostListener('window:scroll', [])
  onWindowScroll() {


    var scroll = window.scrollY;

    if (scroll > 80) {
      $('#nav-container').css({ position: 'fixed' });

      $('#nav-container').addClass('animated');
      $('#nav-container').addClass('slideInDown');
      $('#nav-container').removeClass('slideInUp');

      $('#main-nav-bar').removeClass('p-4');
      $('#main-nav-bar').addClass('p-3');
    }

    // tslint:disable-next-line: one-line
    else if (scroll < 80) {
      $('#nav-container').css({ position: 'static' });

      $('#nav-container').removeClass('animated');
      $('#nav-container').removeClass('slideInDown');
      $('#nav-container').addClass('slideInUp');

      $('#main-nav-bar').removeClass('p-3');
      $('#main-nav-bar').addClass('p-4');
    }
  }

  ngOnInit() {
    this.routeDetails
      .data
      .subscribe(data => {
        this.activenavhome = data.activehome;
        this.activenavclient = data.activeclient;
        this.activenavcontact = data.activecontact;
        this.activenavservice = data.activservice;
        this.activenavportfolio = data.activeportfolio;
      });

    console.log(this.activenavservice);



  }

}
