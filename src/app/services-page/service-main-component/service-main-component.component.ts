import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-service-main-component',
  templateUrl: './service-main-component.component.html',
  styleUrls: ['./service-main-component.component.css']
})
export class ServiceMainComponentComponent implements OnInit {



  service_category: string = '';

  public Urlitem: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.Urlitem = this.activatedRoute.snapshot.paramMap.get('service');
  }



  ngOnInit() {
    if (this.Urlitem === 'wedding') {
      this.showWeedingService();
    }

    else if (this.Urlitem === 'birthday') {
      this.showBirthdayService();
    }

    else if (this.Urlitem === 'party') {
      this.showPartyService();
    }
  }




  showWeedingService() {
    $('.party-component').fadeOut(100);
    $('.birthday-component').fadeOut(100);
    $('.weeding-component').fadeIn(100);

    $('#weeding-service').addClass('active-services');
    $('.weeding-component').addClass('bounceInUp');

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
    $('.party-component').addClass('bounceInUp');

    this.service_category = 'Party';

  }


  showBirthdayService() {
    $('.party-component').fadeOut(100);
    $('.weeding-component').fadeOut(100);
    $('.birthday-component').fadeIn(100);


    $('#weeding-service').removeClass('active-services');
    $('#birthday-service').addClass('active-services');

    $('#party-service').removeClass('active-services');
    $('.birthday-component').addClass('bounceInUp');

    this.service_category = 'Birthday';

  }




}
