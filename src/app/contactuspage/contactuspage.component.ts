import { Component, OnInit } from '@angular/core';
import { ContactuspageService } from './contactuspage.service';



@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.component.html',
  styleUrls: ['./contactuspage.component.css']
})
export class ContactuspageComponent implements OnInit {

  contact: any;

  getContactDetails() {
    this.contactPage.getContactDetails().subscribe(data => {
      this.contact = data[0];
      console.log(this.contact);
    });

  }

  constructor(private contactPage: ContactuspageService) { }

  ngOnInit() {

    this.getContactDetails();
  }

}
