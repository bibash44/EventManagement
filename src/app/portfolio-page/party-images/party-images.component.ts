import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from './party-service.service';


@Component({
  selector: 'app-party-images',
  templateUrl: './party-images.component.html',
  styleUrls: ['./party-images.component.css']
})
export class PartyImagesComponent implements OnInit {


  images: any;
  base_url = this.BASE_URL.publishBaseUrl();

  getPartyImages() {

    this.PartyServices.getPartyImages()
      .subscribe(data => {
        this.images = data;

      });
  }

  constructor(private PartyServices: PartyServiceService, private BASE_URL: AppServiceService) { }

  ngOnInit() {
    this.getPartyImages();

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
    // this.getPartyImages();
  }

}
