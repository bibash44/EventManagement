import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})

export class ServeicesPageComponent implements OnInit {

  servicesContainer: any;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    var scroll = window.scrollY;

    if (scroll > 20) {
      $('#services').addClass('flipInY');
    }
  }


  ngOnInit() {
    this.servicesContainer = [
      {
        routeLink: '/services',
        toolTip: 'Click to know more about weeding',
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Wedding'
      },
      {
        routeLink: '/services',
        toolTip: 'Click to know more about birthday',
        image: 'assets/images/birthday_homepage.jpg',
        title: 'Birthday'
      },
      {
        routeLink: '/services',
        toolTip: 'Click to know more about party',
        image: 'assets/images/party_homepage.jpg',
        title: 'Party'
      }
    ]

  }

}
