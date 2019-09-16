import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from './party-service.service';


@Component({
  selector: 'app-party-component',
  templateUrl: './party-component.component.html',
  styleUrls: ['./party-component.component.css']
})
export class PartyComponentComponent implements OnInit {

  images: any;

  getPartyServices() {


    this.partyServices.getPartyServices()
      .subscribe(data => this.images = data);

  }

  constructor(private partyServices: PartyServiceService) { }

  ngOnInit() {
    this.images = [
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },
      {
        image: 'assets/images/weeding_homepage.jpg',
        title: 'Birthday wedding at home',
        description: ' Description of the image'
      },

    ];

    // this.getPartyServices();

  }

}
