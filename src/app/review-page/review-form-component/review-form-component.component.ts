import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-review-form-component',
  templateUrl: './review-form-component.component.html',
  styleUrls: ['./review-form-component.component.css']
})
export class ReviewFormComponentComponent implements OnInit {

  name = '';
  comment = '';
  emai = '';
  prefered_location = '';


  commentFormSubmit(name, comment) {
    let nameValue = name.value;
    let commentValue = comment.value;



    // tslint:disable-next-line: triple-equals
    if (nameValue == '') {
      $('#name').attr('placeholder', 'Please enter a name *');
      $('#name').focus();
      $('#name').css({ 'border-bottom': '2px solid red' });

    }

    else if (commentValue == '') {
      $('#comment').attr('placeholder', 'Please enter a phone comment *');
      $('#comment').focus();
      $('#comment').css({ 'border-bottom': '2px solid red' });

    }  else {

      this.name = nameValue;
      this.comment = commentValue;

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
