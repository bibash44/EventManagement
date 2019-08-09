import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-clientspage',
  templateUrl: './clientspage.component.html',
  styleUrls: ['./clientspage.component.css']
})
export class ClientspageComponent implements OnInit {

  clients_details = [
    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    },

    {
      image: 'assets/clients/client1.jpg',
      client_saying: 'Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law',
      client_name: 'Dinesh Gupta',
      client_company: 'Classic tech'
    }


  ]

  constructor() { }

  ngOnInit() {

  }

}
