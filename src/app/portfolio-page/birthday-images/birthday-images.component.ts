import { Component, OnInit } from '@angular/core';
import { BirthdayServiceService } from './birthday-service.service';


@Component({
  selector: 'app-birthday-images',
  templateUrl: './birthday-images.component.html',
  styleUrls: ['./birthday-images.component.css']
})
export class BirthdayImagesComponent implements OnInit {

  images: any;

  birthdayImages() {

    this.birthdayServices.getBirthdayImages()
      .subscribe(data => {
        this.images = data;

      });
  }

  constructor(private birthdayServices: BirthdayServiceService) { }

  ngOnInit() {
    this.birthdayImages();
  }

}
