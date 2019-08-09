import { Component, OnInit, Inject, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {


    var scroll = window.scrollY;

    if (scroll > 20) {
      $('#success-gallery').addClass('fadeInRight');
    }
  }


  ngOnInit() {


  }

}
