import { WeedingServiceService } from './weeding-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weeding-images',
  templateUrl: './weeding-images.component.html',
  styleUrls: ['./weeding-images.component.css']
})
export class WeedingImagesComponent implements OnInit {


  images: any;

  getweedingImages() {

    this.weedingServices.getWeedingImages()
      .subscribe(data => {
        this.images = data;
      });


  }

  constructor(private weedingServices: WeedingServiceService) { }

  ngOnInit() {
    // this.getweedingImages();

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
