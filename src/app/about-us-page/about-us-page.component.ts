import { AboutsUsPageeService } from './abouts-us-pagee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {

  aboutPage: any;

  getAboutDetails() {
    this.aboutService.getAboutDetails().
      subscribe(data => {
        this.aboutPage = data;
        console.log(this.aboutPage);
      })
  }

  constructor(private aboutService: AboutsUsPageeService) { }

  ngOnInit() {
    this.getAboutDetails();
  }

}
