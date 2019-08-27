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
  activenavreview = '';
  activenavabout = '';



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

      $('#main-nav-bar').removeClass('p-2');
      $('#main-nav-bar').addClass('p-1');
    }

    // tslint:disable-next-line: one-line
    else if (scroll < 80) {
      $('#nav-container').css({ position: 'static' });

      $('#nav-container').removeClass('animated');
      $('#nav-container').removeClass('slideInDown');

      $('#main-nav-bar').removeClass('p-2');
      $('#main-nav-bar').addClass('p-1');
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
        this.activenavreview = data.activepreview;
        this.activenavabout = data.aboutactive;
      });
  }

}
