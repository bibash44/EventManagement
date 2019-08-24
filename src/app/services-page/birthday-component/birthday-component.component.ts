import { Component, OnInit } from '@angular/core';
import { BirthdayServiceService } from './birthday-service.service';


@Component({
  selector: 'app-birthday-component',
  templateUrl: './birthday-component.component.html',
  styleUrls: ['./birthday-component.component.css']
})
export class BirthdayComponentComponent implements OnInit {

  images: any;

  getbirthdayServices() {
    this.birthdayServices.getBirthdayServices().subscribe(data => {
      this.images = data;
      console.log(this.images);
    });

  }


  constructor(private birthdayServices: BirthdayServiceService) { }

  ngOnInit() {
    this.getbirthdayServices();
  }

}
