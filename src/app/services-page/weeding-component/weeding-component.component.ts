import { WeedingServiceService } from './weeding-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weeding-component',
  templateUrl: './weeding-component.component.html',
  styleUrls: ['./weeding-component.component.css']
})
export class WeedingComponentComponent implements OnInit {

  images: any;

  getweedingServices() {

    this.weedingServices.getWeedingServices()
      .subscribe(data => this.images = data);

  }

  constructor(private weedingServices: WeedingServiceService) { }

  ngOnInit() {

    // this.getweedingServices();

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
  }

}
