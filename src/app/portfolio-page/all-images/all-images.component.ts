import { Component, OnInit } from '@angular/core';
import { AllServiceService } from './all-service.service';


@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {

  images: any;

  allImages() {

    this.allServices.getAllImages()
      .subscribe(data => {
        this.images = data;

      });
  }

  constructor(private allServices: AllServiceService) { }

  ngOnInit() {
    // this.allImages();
    this.images = [
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

    ];
  }

}
