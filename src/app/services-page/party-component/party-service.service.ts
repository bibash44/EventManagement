import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppServiceService} from '../../app-service.service';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {
  base_url = this.BASE_URL.publishBaseUrl();
  type = 'Party';

  getPartyServices() {
    return this.http.get(this.base_url + 'services/get_services_type/' + this.type);
  }

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) { }
}
