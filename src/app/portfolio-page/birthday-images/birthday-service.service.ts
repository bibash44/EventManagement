import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirthdayServiceService {

  base_url = 'http://localhost:1954/';
  type = 'Birthday';

  getBirthdayImages() {
    return this.http.get(this.base_url + 'portfolio/get_portfolio_type/' + this.type);
  }

  constructor(private http: HttpClient) {

  }
}