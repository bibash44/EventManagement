import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from './party-service.service';


@Component({
  selector: 'app-party-component',
  templateUrl: './party-component.component.html',
  styleUrls: ['./party-component.component.css']
})
export class PartyComponentComponent implements OnInit {

  images: any;

  getPartyServices() {


    this.partyServices.getPartyServices()
      .subscribe(data => this.images = data);

  }

  constructor(private partyServices: PartyServiceService) { }

  ngOnInit() {

    this.getPartyServices();
  }

}
