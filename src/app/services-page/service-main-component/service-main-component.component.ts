import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-service-main-component',
  templateUrl: './service-main-component.component.html',
  styleUrls: ['./service-main-component.component.css']
})
export class ServiceMainComponentComponent implements OnInit {



  service_category: string = '';



  showWeedingService() {
    $('.party-component').fadeOut(100);
    $('.birthday-component').fadeOut(100);
    $('.weeding-component').fadeIn(100);

    $('#weeding-service').addClass('active-services');
    $('#birthday-service').removeClass('active-services');
    $('#party-service').removeClass('active-services');
    this.service_category = 'Weeding';

  }

  showPartyService() {
    $('.weeding-component').fadeOut(100);
    $('.birthday-component').fadeOut(100);
    $('.party-component').fadeIn(100);


    $('#weeding-service').removeClass('active-services');
    $('#birthday-service').removeClass('active-services');
    $('#party-service').addClass('active-services');

    this.service_category = 'Party';

  }


  showBirthdayService() {
    $('.party-component').fadeOut(100);
    $('.weeding-component').fadeOut(100);
    $('.birthday-component').fadeIn(100);


    $('#weeding-service').removeClass('active-services');
    $('#birthday-service').addClass('active-services');
    $('#party-service').removeClass('active-services');

    this.service_category = 'Birthday';

  }


  constructor() {
  }

  ngOnInit() {
  }

}
