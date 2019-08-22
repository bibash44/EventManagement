import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { SuccessStoryService } from './success-story.service';

@Component({
  selector: 'app-our-success-story-component',
  templateUrl: './our-success-story-component.component.html',
  styleUrls: ['./our-success-story-component.component.css']
})
export class OurSuccessStoryComponentComponent implements OnInit {


  images: any;

  constructor(private successStoryService: SuccessStoryService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    console.log(window.scrollY);
    var scroll = window.scrollY;

    if (scroll > 500) {
      $('#success-gallery').addClass('flipInX');
    }
  }


  getSuccessStory() {
    this.successStoryService.getSuccessStoryImages().subscribe(data => {
      this.images = data;
      console.log(this.images);
    });
  }


  ngOnInit() {

    this.getSuccessStory();
  }

}
