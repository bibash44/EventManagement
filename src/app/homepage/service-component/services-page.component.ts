import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})

export class ServeicesPageComponent implements OnInit {


  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    var scroll = window.scrollY;

    if (scroll > 20) {
      $('#services').addClass('flipInY');
    }
  }


  ngOnInit() {

  }

}
