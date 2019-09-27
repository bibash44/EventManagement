import { AppServiceService } from './../../app-service.service';
import { WeedingServiceService } from './weeding-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weeding-images',
  templateUrl: './weeding-images.component.html',
  styleUrls: ['./weeding-images.component.css']
})
export class WeedingImagesComponent implements OnInit {


  images: any;
  base_url = this.BASE_URL.publishBaseUrl();

  getweedingImages() {

    this.weedingServices.getWeedingImages()
      .subscribe(data => {
        this.images = data;
      });


  }

  constructor(private weedingServices: WeedingServiceService, private BASE_URL: AppServiceService) { }

  ngOnInit() {
    // this.getweedingImages();
    this.getweedingImages();

    // this.images = [
    //   {
    //     image: 'assets/images/weeding_homepage.jpg',
    //     title: 'Birthday wedding at home',
    //   },
    //   {
    //     image: 'assets/images/weeding_homepage.jpg',
    //     title: 'Birthday wedding at home',
    //   },
    //   {
    //     image: 'assets/images/weeding_homepage.jpg',
    //     title: 'Birthday wedding at home',
    //   },
    //   {
    //     image: 'assets/images/weeding_homepage.jpg',
    //     title: 'Birthday wedding at home',
    //   },

    //   {
    //     image: 'assets/images/weeding_homepage.jpg',
    //     title: 'Birthday wedding at home',
    //   },

    // ];
  }

}
