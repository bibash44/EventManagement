import { AppServiceService } from './../../app-service.service';
import { ClientspageService } from './clientspage.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-clientsreview',
  templateUrl: './clientsreview.component.html',
  styleUrls: ['./clientsreview.component.css']
})
export class ClientsreviewComponent implements OnInit {


  firstImage = 0;
  secondImage = 1;
  thirdImage = 2;

  slides = Array(3);

  clients: any;
  base_url = this.BASE_URL.publishBaseUrl();



  showNextSlide() {
    var total_images = this.clients.length;


    this.firstImage = this.secondImage;
    this.secondImage = this.thirdImage;
    this.thirdImage = this.thirdImage + 1;

    if (this.thirdImage === total_images) {
      this.firstImage = 0;
      this.secondImage = 1;
      this.thirdImage = 2;
    }

    else {

      $('#f-client-details').addClass('slideInRight');
      $('#s-client-details').addClass('slideInRight');
      $('#t-client-details').addClass('slideInRight');

      setTimeout(function () {
        // $('#client-details-content').removeClass('slideInRight');
        $('#f-client-details').removeClass('slideInRight');
        $('#s-client-details').removeClass('slideInRight');
        $('#t-client-details').removeClass('slideInRight');
      }, 5000);
    }
  }


  ShowPreviosSlides() {

    var total_images = this.clients.length;

    this.thirdImage = this.secondImage;
    this.secondImage = this.firstImage;
    this.firstImage = this.firstImage - 1;

    if (this.firstImage <= 0) {
      this.firstImage = 0;
      this.secondImage = 1;
      this.thirdImage = 2;
    }

    else {

      // $('#client-details-content').addClass('slideInLeft');

      $('#f-client-details').addClass('slideInLeft');
      $('#s-client-details').addClass('slideInLeft');
      $('#t-client-details').addClass('slideInLeft');

      setTimeout(function () {
        $('#client-details-content').removeClass('slideInLeft');
        $('#f-client-details').removeClass('slideInLeft');
        $('#s-client-details').removeClass('slideInLeft');
        $('#t-client-details').removeClass('slideInLeft');
      }, 5000);
    }
  }


  getClientsDetails() {
    this.clientsPageService.getClientsDetails().subscribe(data => {
      this.clients = data;
    });
  }


  constructor(private clientsPageService: ClientspageService, private BASE_URL: AppServiceService) { }

  ngOnInit() {

    setInterval(() => {
      this.showNextSlide();
    }, 4000);

    this.getClientsDetails();

  }

}
