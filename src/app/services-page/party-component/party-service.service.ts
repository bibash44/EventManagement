import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {

  base_url = 'http://localhost:1954/';
  type = 'Party';

  getPartyServices() {
    return this.http.get(this.base_url + 'services/get_services_type/' + this.type);
  }

  constructor(private http: HttpClient) { }
}
