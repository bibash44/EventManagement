import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})

// @Component({
//   selector:'app-services-page',
//   templateUrl:'./services-page.component.html',
//   styleUrls:[]
// })
export class ServeicesPageComponent implements OnInit {

  images = [
    'assets/success-story-images/sample1.jpg',

    'assets/success-story-images/sample2.jpg',

    'assets/success-story-images/sample3.jpg',

    'assets/success-story-images/sample4.jpg',

    'assets/success-story-images/sample5.jpg',

    'assets/success-story-images/sample6.jpg',

    'assets/success-story-images/sample5.jpg',

    'assets/success-story-images/sample3.jpg',

    'assets/success-story-images/sample2.jpg',
  ];



  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    console.log(window.scrollY);
    var scroll = window.scrollY;

    if (scroll > 20) {
      $('#services').addClass('flipInY');
    }
  }


  ngOnInit() {

  }

}
