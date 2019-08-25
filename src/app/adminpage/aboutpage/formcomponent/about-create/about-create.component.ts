import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-create',
  templateUrl: './about-create.component.html',
  styleUrls: ['./about-create.component.css']
})
export class AboutCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  aboutFormSubmit(title, content) {

    const titleValue = title.value;
    const contentValue = content.value;

    if (titleValue === '') {
      $('#title').attr('placeholder', 'Please enter a title *');
      $('#title').focus();
      $('#title').css({ border: '2px solid red' });

    } else if (contentValue === '') {
      $('#content').attr('placeholder', 'Please enter a content *');
      $('#content').focus();
      $('#content').css({ border: '2px solid red' });

    } else {
      const data = {
        title: titleValue,
        content: contentValue
      };

      $.ajax({
        type: 'POST',
        url: 'https://eventmandu.com/aboutus/addAboutUs',
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

}
