import { ImagesliderService } from './imageslider.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {
  sliderimages: any;


  getSliderImages() {
    this.imageSliderService.getSliderImages()
      .subscribe(data => {
        this.sliderimages = data;
        // console.log("slider images "+this.sliderimages)
      });
  }

  constructor(private imageSliderService: ImagesliderService) { }

  ngOnInit() {
    this.getSliderImages();


  }

}
