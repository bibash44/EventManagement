import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  // BASE_URL: string = 'htttps://eventmandu.com/';
  BASE_URL = 'http://localhost:1954/';

  constructor() { }


  public publishBaseUrl() {
    return this.BASE_URL;
  }

}
