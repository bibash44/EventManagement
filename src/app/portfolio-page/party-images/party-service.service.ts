import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {

  base_url = 'https://eventmandu.com/';
  type = 'Party';

  getPartyImages() {
    return this.http.get(this.base_url + 'portfolio/get_portfolio_type/' + this.type);
  }

  constructor(private http: HttpClient) {

  }

}
