
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-booking-form-component',
  templateUrl: './booking-form-component.component.html',
  styleUrls: ['./booking-form-component.component.css']
})
export class BookingFormComponentComponent implements OnInit {


  name = '';
  phone_number = '';
  email = '';
  prefered_location = '';
  base_url = 'https://eventmandu.com/';




  bookingFormSubmit(name, phone_number, email, prefered_location) {
    let nameValue = name.value;
    let phone_numberValue = phone_number.value;
    let emailValue = email.value;
    let prefered_locationValue = prefered_location.value;


    // tslint:disable-next-line: triple-equals
    if (nameValue == '') {
      $('#name').attr('placeholder', 'Please enter a name *');
      $('#name').focus();
      $('#name').css({ 'border-bottom': '2px solid red' });

    } else if (!nameValue.match('^[A-Z a-z a-z A-Z]{3,16}$')) {
      $('#name').val('');
      $('#name').attr('placeholder', 'Please enter a valid name');
      $('#name').focus();
      $('#name').css({ 'border-bottom': '2px solid red' });

    } else if (phone_numberValue == '') {
      $('#phone_number').attr('placeholder', 'Please enter a phone number');
      $('#phone_number').focus();
      $('#phone_number').css({ 'border-bottom': '2px solid red' });

    } else if (!phone_numberValue.match('([0-9 + -]+).{7,}')) {
      $('#phone_number').val('');
      $('#phone_number').attr('placeholder', 'Please enter a phone valid phone number');
      $('#phone_number').focus();
      $('#phone_number').css({ 'border-bottom': '2px solid red' });

    } else if (emailValue == '') {
      $('#email').attr('placeholder', 'Please enter a email');
      $('#email').focus();
      $('#email').css({ 'border-bottom': '2px solid red' });

    } else if (!emailValue.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')) {
      $('#email').val('');
      $('#email').attr('placeholder', 'Please enter a valid email');
      $('#email').focus();
      $('#email').css({ 'border-bottom': '2px solid red' });

    } else {

      this.name = nameValue;
      this.phone_number = phone_numberValue;
      this.email = emailValue;
      this.prefered_location = prefered_locationValue;

      $.ajax({
        url: this.base_url + 'booking',
        type: 'POST',
        data: {
          name: this.name,
          phone_number: this.phone_number,
          email: this.email,
          prefered_location: this.prefered_location
        },
        success: function (data) {

          var success = data.success;

          if (success) {
            $('#comment-validation').removeClass('alert-danger');
            $('#comment-validation').addClass('alert-success');
            $('#comment-validation').text('Booking made successfully');
            $('#comment-validation').fadeIn(1000);

            $('#name').val('');
            $('#email').val('');
            $('#prefered_location').val('');
            $('#phone_number').val('');

            setTimeout(function () {
              $('#comment-validation').fadeOut(1000);
            }, 2000);
          }

          else {
            $('#comment-validation').removeClass('alert-success');
            $('#comment-validation').addClass('alert-danger');
            $('#comment-validation').text('Something went wrong please try again');
            $('#comment-validation').fadeIn(1000);

            setTimeout(function () {
              $('#comment-validation').fadeOut(1000);
            }, 2000);
          }
        }, error() {
          $('#comment-validation').removeClass('alert-success');
          $('#comment-validation').addClass('alert-danger');
          $('#comment-validation').text('Something went wrong please try again');
          $('#comment-validation').fadeIn(1000);

          setTimeout(function () {
            $('#comment-validation').fadeOut(1000);
          }, 2000);
        }
      })
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
