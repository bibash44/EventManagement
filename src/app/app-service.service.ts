import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  // BASE_URL: string = 'https://eventmandu.com/';
  // BASE_URL: string = 'eventmandu.xyz/';
  BASE_URL: string = 'https://eventmandu.xyz/';
  // BASE_URL: string = 'http://localhost:1954/';

  constructor() { }


  public publishBaseUrl() {
    return this.BASE_URL;
  }

}
