import { ImagesliderService } from './imageslider.service';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';


@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {
  base_url = this.BASE_URL.publishBaseUrl();

  sliderimages: any;
  isValueFromServerReceived = false;
  staticImages: any;

  getSliderImages() {

    this.imageSliderService.getSliderImages().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.isValueFromServerReceived = true;
        this.sliderimages = data;
      }
      else {
        this.isValueFromServerReceived = false;
        this.sliderimages = this.staticImages;
      }
    });


  }

  constructor(private imageSliderService: ImagesliderService, private BASE_URL: AppServiceService) {
  }

  ngOnInit() {

    this.getSliderImages();
    this.staticImages = [
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'wedding at home',
        sub_title: 'Weeding'
      },

      {
        image: 'assets/images/party_homepage.jpg',
        title: 'party at home',
        sub_title: 'party'
      },

      {
        image: 'assets/images/birthday_homepage.jpg',
        title: 'birthday at home',
        sub_title: 'birthday'
      },

    ];

  }

}
