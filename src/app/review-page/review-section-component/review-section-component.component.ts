// import { ReviewSectionServiceService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { ReviewSectionService } from './review-section.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-review-section-component',
  templateUrl: './review-section-component.component.html',
  styleUrls: ['./review-section-component.component.css']
})
export class ReviewSectionComponentComponent implements OnInit {


  comments: any;
  base_url: string = 'http://localhost:1954/';



  constructor(private reviewService: ReviewSectionService) { }

  firstImage = 0;
  secondImage = 1;
  thirdImage = 2;

  slides = Array(3);


  showNextSlide() {
    var total_images = this.comments.length;


    this.firstImage = this.secondImage;
    this.secondImage = this.thirdImage;
    this.thirdImage = this.thirdImage + 1;

    if (this.thirdImage == total_images) {
      this.firstImage = 0;
      this.secondImage = 1;
      this.thirdImage = 2;
    }

    else {

      $('#f-comment-details').addClass('slideInRight');
      $('#s-comment-details').addClass('slideInRight');
      $('#t-comment-details').addClass('slideInRight');

      setTimeout(function () {
        // $('#comment-details-content').removeClass('slideInRight');
        $('#f-comment-details').removeClass('slideInRight');
        $('#s-comment-details').removeClass('slideInRight');
        $('#t-comment-details').removeClass('slideInRight');
      }, 2000);
    }
  }


  ShowPreviosSlides() {

    var total_images = this.comments.length;

    this.thirdImage = this.secondImage;
    this.secondImage = this.firstImage;
    this.firstImage = this.firstImage - 1;

    if (this.firstImage <= 0) {
      this.firstImage = 0;
      this.secondImage = 1;
      this.thirdImage = 2;
    }

    else {

      // $('#comment-details-content').addClass('slideInLeft');

      $('#f-comment-details').addClass('slideInLeft');
      $('#s-comment-details').addClass('slideInLeft');
      $('#t-comment-details').addClass('slideInLeft');

      setTimeout(function () {
        $('#comment-details-content').removeClass('slideInLeft');
        $('#f-comment-details').removeClass('slideInLeft');
        $('#s-comment-details').removeClass('slideInLeft');
        $('#t-comment-details').removeClass('slideInLeft');
      }, 2000);
    }
  }



  showConfig() {
    this.reviewService.getReviews()
      .subscribe(data => {
        this.comments = data['data'];
      });
  }


  ngOnInit() {

    this.showConfig();
    console.log(this.comments);

    setInterval(() => {
      this.showNextSlide();
    }, 4000);





  }

}
