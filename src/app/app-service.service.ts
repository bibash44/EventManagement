import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  // BASE_URL: string = 'https://eventmandu.com/';
  BASE_URL: string = 'http://localhost:1954/';
  // BASE_URL: string = 'localhost:8080/';

  constructor() { }


  public publishBaseUrl() {
    return this.BASE_URL;
  }

}
