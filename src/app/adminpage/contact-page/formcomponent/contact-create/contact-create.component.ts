import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {


  contactFormSubmit() {
    const emailValue = $('#email').val();
    const phoneOneValue = $('#phoneOne').val();
    const phoneTwoValue = $('#phoneTwo').val();
    const mapValue = $('#map').val();
    const openingHourValue = $('#openingHour').val();
    const addressValue = $('#address').val();

    if (emailValue === '') {
      $('#email').attr('placeholder', 'Please enter a email address *');
      $('#email').focus();
      $('#email').css({border: '2px solid red'});

    } else if (phoneOneValue === '') {
      $('#phoneOne').attr('placeholder', 'Please enter a phone number *');
      $('#phoneOne').focus();
      $('#phoneOne').css({border: '2px solid red'});

    }  else if (mapValue === '') {
      $('#map').attr('placeholder', 'Please insert map link *');
      $('#map').focus();
      $('#map').css({border: '2px solid red'});

    } else if (openingHourValue === '') {
      $('#openingHour').attr('placeholder', 'Please enter the opening hour *');
      $('#openingHour').focus();
      $('#openingHour').css({border: '2px solid red'});

    } else if (addressValue === '') {
      $('#address').attr('placeholder', 'Please set a address *');
      $('#address').focus();
      $('#address').css({border: '2px solid red'});

    } else {
      const data = {
        email: emailValue,
        phone_one: phoneOneValue,
        phone_two: phoneTwoValue,
        map: mapValue,
        opening_hour: openingHourValue,
        address: addressValue
      };

      $.ajax({
        type: 'PUT',
        url: 'http://localhost:1954/contact/update/contact',
        data,
        success(res) {
          if (res) {
            alert('success');
          }
        },
        error() {
          alert('error');
        }
      });
    }
  }

  populateForm() {

    $.ajax({
      type: 'GET',
      url: 'http://localhost:1954/contact/getContact',
      success(data) {
        console.log(data);

        for (const value of data) {
          $('#id').val(value.id);
          $('#email').val(value.email);
          $('#phoneOne').val(value.phone_one);
          $('#phoneTwo').val(value.phone_two);
          $('#map').val(value.map);
          $('#openingHour').val(value.opening_hour);
          $('#address').val(value.address);
        }

      },
      error() {
        alert('Error fetching data');
      }
    });

  }

  constructor() { }

  ngOnInit() {
  }

}
