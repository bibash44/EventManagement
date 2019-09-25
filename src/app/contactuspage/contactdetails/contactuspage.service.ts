import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppServiceService} from '../../app-service.service';


@Injectable({
  providedIn: 'root'
})
export class ContactuspageService {

  base_url = this.BASE_URL.publishBaseUrl();

  getContactDetails() {
    return this.http.get(this.base_url + 'contact/getContact');
  }

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) { }
}
