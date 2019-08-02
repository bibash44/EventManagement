import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-our-success-story-component',
  templateUrl: './our-success-story-component.component.html',
  styleUrls: ['./our-success-story-component.component.css']
})
export class OurSuccessStoryComponentComponent implements OnInit {


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

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    console.log(window.scrollY)
    var scroll = window.scrollY;

    if (scroll > 20) {
      $('#success-gallery').addClass('flipInX');
    }
  }



  ngOnInit() {


  }

}
