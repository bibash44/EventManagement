import { AppServiceService } from './../../app-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientspageService {

  // base_url: string = 'https://eventmandu.com/';
  base_url = this.BASE_URL.publishBaseUrl();

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) { }

  getClientsDetails() {
    return this.http.get(this.base_url + 'clients/getClients');
  }
}
