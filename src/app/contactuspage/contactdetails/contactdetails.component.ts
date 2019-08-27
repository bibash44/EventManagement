import { ContactuspageService } from './contactuspage.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

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
