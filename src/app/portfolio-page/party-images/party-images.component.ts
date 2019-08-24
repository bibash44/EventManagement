import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from './party-service.service';


@Component({
  selector: 'app-party-images',
  templateUrl: './party-images.component.html',
  styleUrls: ['./party-images.component.css']
})
export class PartyImagesComponent implements OnInit {


  images: any;

  getPartyImages() {

    this.PartyServices.getPartyImages()
      .subscribe(data => {
        this.images = data;

      });
  }

  constructor(private PartyServices: PartyServiceService) { }

  ngOnInit() {
    this.getPartyImages();
  }

}
