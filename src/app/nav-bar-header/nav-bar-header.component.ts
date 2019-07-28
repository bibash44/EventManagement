import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar-header',
  templateUrl: './nav-bar-header.component.html',
  styleUrls: ['./nav-bar-header.component.css']
})
export class NavBarHeaderComponent implements OnInit {

  activenavhome = '';

  openNav() {
    $('#navbarSupportedContent').fadeToggle(500);
    // $('#site-logo').fadeOut();
  }

  showServices() {
    $('#services-menu').fadeToggle(500);
  }

  showSearchInput() {
    $('#search-bar').fadeToggle(100);
    $('#txt-nav-bar-search').focus();
  }

  constructor(private routeDetails: ActivatedRoute) { }

  ngOnInit() {
    this.routeDetails
      .data
      .subscribe(data => {
        this.activenavhome = data.activehome;
      });

    console.log(this.activenavhome)

  }

}
