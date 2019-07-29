import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footercomponent',
  templateUrl: './footercomponent.component.html',
  styleUrls: ['./footercomponent.component.css']
})
export class FootercomponentComponent implements OnInit {

  date = new Date().getFullYear();

  constructor() {

  }

  ngOnInit() {

  }

}
