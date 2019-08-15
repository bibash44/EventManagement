import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-clientspage',
  templateUrl: './clientspage.component.html',
  styleUrls: ['./clientspage.component.css']
})
export class ClientspageComponent implements OnInit {


  firstImage = 0;
  secondImage = 1;
  thirdImage = 2;

  slides = Array(3);

  clients = [
    {
      image: 'assets/clients/c1.jpg',
      client_saying: 'k xa vai, sab thik thak hola ni dherai din vo naveteko',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client2.jpg',
      client_saying: 'ah dai sabei thekai xa ani hajur ko vanu hos',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/c3.jpg',
      client_saying: 'a vai mero ni sab halchal tah thik xa baru kata gara aaish tah van na',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/c4.jpg',
      client_saying: 'a dai yeso ghumera ako ni',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/c5.jpg',
      client_saying: 'ok xa tah ani ba gardainas tah',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/c6.jpg',
      client_saying: 'kaha dai haruko navai vai lay garnu',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/c1.jpg',
      client_saying: 'kaha mula dai haruko chora janmi sako thyat',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    }
  ];


  showNextSlide() {
    var total_images = this.clients.length;


    this.firstImage = this.secondImage;
    this.secondImage = this.thirdImage;
    this.thirdImage = this.thirdImage + 1;

    if (this.thirdImage == total_images) {
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
      }, 2000);
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
      }, 2000);
    }
  }




  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.showNextSlide();
    }, 4000);

  }

}
