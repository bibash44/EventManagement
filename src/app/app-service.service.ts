import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  BASE_URL: string = 'htttps://eventmandu.com/';

  constructor() { }


  public publishBaseUrl() {
    return this.BASE_URL;
  }

}
