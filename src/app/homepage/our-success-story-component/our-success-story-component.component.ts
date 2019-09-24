import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { SuccessStoryService } from './success-story.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-our-success-story-component',
  templateUrl: './our-success-story-component.component.html',
  styleUrls: ['./our-success-story-component.component.css']
})
export class OurSuccessStoryComponentComponent implements OnInit {


  images: any;
  imagesUrl: any;

  constructor(private successStoryService: SuccessStoryService, private sanitizer: DomSanitizer) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // tslint:disable-next-line: prefer-const
    let scroll = window.scrollY;

    if (scroll > 500) {
      $('#success-gallery').addClass('flipInX');
    }
  }


  getSuccessStory() {
    this.successStoryService.getSuccessStoryImages().subscribe(data => {
      this.images = data;
    });
  }


  ngOnInit() {

    this.images = [
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/birthday_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/party_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },

      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },

      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },

      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      }
      , {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      }
      , {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
      }

    ];
    // this.getSuccessStory();
  }

}
