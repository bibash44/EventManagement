import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {



  showWeedingService() {
    $('.party-component').fadeOut(100);
    $('.birthday-component').fadeOut(100);
    $('.all-component').fadeOut(100);
    $('.weeding-component').fadeIn(100);


    $('#weeding-service').addClass('active-services');
    $('.weeding-component').addClass('bounceInUp');

    $('#birthday-service').removeClass('active-services');
    $('#party-service').removeClass('active-services');
    $('#all-service').removeClass('active-services');


  }

  showPartyService() {
    $('.weeding-component').fadeOut(100);
    $('.birthday-component').fadeOut(100);
    $('.all-component').fadeOut(100);
    $('.party-component').fadeIn(100);


    $('#weeding-service').removeClass('active-services');
    $('#birthday-service').removeClass('active-services');
    $('#all-service').removeClass('active-services');

    $('#party-service').addClass('active-services');
    $('.party-component').addClass('bounceInUp');
  }


  showBirthdayService() {
    $('.party-component').fadeOut(100);
    $('.weeding-component').fadeOut(100);
    $('.all-component').fadeOut(100);
    $('.birthday-component').fadeIn(100);


    $('#weeding-service').removeClass('active-services');
    $('#party-service').removeClass('active-services');
    $('#all-service').removeClass('active-services');

    $('#birthday-service').addClass('active-services');
    $('.birthday-component').addClass('bounceInUp');

  }


  showAllService() {
    $('.party-component').fadeOut(100);
    $('.weeding-component').fadeOut(100);
    $('.birthday-component').fadeOut(100);
    $('.all-component').fadeIn(100);



    $('#weeding-service').removeClass('active-services');
    $('#party-service').removeClass('active-services');
    $('#birthday-service').removeClass('active-services');

    $('#all-service').addClass('active-services');
    $('.all-component').addClass('bounceInUp');

  }





  constructor() { }

  ngOnInit() {
  }

}
