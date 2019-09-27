import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';
import { BirthdayServiceService } from './birthday-service.service';


@Component({
  selector: 'app-birthday-images',
  templateUrl: './birthday-images.component.html',
  styleUrls: ['./birthday-images.component.css']
})
export class BirthdayImagesComponent implements OnInit {

  images: any;
  base_url = this.BASE_URL.publishBaseUrl();

  birthdayImages() {

    this.birthdayServices.getBirthdayImages()
      .subscribe(data => {
        this.images = data;

      });
  }

  constructor(private birthdayServices: BirthdayServiceService, private BASE_URL: AppServiceService) { }

  ngOnInit() {
    this.birthdayImages();
    // this.birthdayImages();

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
