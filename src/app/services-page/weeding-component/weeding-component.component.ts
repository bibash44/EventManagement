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
    console.log(this.images);

  }

  constructor(private weedingServices: WeedingServiceService) { }

  ngOnInit() {

    this.getweedingServices();
  }

}
