import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weeding-images',
  templateUrl: './weeding-images.component.html',
  styleUrls: ['./weeding-images.component.css']
})
export class WeedingImagesComponent implements OnInit {

  images = [
    {
      src: 'assets/success-story-images/sample1.jpg',
      package_title: 'budget and planning',
      package_detail: 'We let you decide the budget you want to spend'
    },

    {
      src: 'assets/success-story-images/sample2.jpg',
      package_title: 'Venue & Location',
      package_detail: 'We source and recommend locations & venues for your events & wedding event based on your vision and budget – from the Traditional to out of the ordinary.'
    },

    {
      src: 'assets/success-story-images/sample3.jpg',
      package_title: 'Design & Décor',
      package_detail: 'We conceptualize, create and coordinate themes and all your décor desires, in conjunction with your vision.'
    },

    {
      src: 'assets/success-story-images/sample4.jpg',
      package_title: 'Invitation Card',
      package_detail: 'We design and coordinate complete print material in sync with the event theme and help you create something uniquely your own.'
    },

    {
      src: 'assets/success-story-images/sample5.jpg',
      package_title: 'Catering',
      package_detail: 'Welcome Event will consult and coordinate menu selections, design, presentation, styling as well as bar and alcohol management.'
    },

    {
      src: 'assets/success-story-images/sample6.jpg',
      package_title: 'Photography & Video',
      package_detail: 'Capture the best & beautiful moments of your program & guest to make it ever lasting.'
    },

    {
      src: 'assets/success-story-images/sample5.jpg',
      package_title: 'Bridal Makeup',
      package_detail: 'Our professional Makeup Artist helps the bride to be prepared for her big day enhancing her Beauty.'
    },

    {
      src: 'assets/success-story-images/sample3.jpg',
      package_title: 'Transportation',
      package_detail: 'We take care of all your needs and provide you with required transportation.'
    },

    {
      src: 'assets/success-story-images/sample2.jpg',
      package_title: 'Sound System & DJ',
      package_detail: 'We arrange sound system for wedding & reception party; DJ or Live band performances more of personal song request and music according to clients request.'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
