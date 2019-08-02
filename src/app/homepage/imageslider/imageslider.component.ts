import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {
  sliderimages = [
    { src: 'assets/success-story-images/sample1.jpg' },

    { src: 'assets/success-story-images/sample2.jpg' },

    { src: 'assets/success-story-images/sample3.jpg' }
  ];



  constructor() { }




  ngOnInit() {


  }

}
