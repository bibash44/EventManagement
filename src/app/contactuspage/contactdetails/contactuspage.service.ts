import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactuspageService {

  base_url = 'https://eventmandu.com/';

  getContactDetails() {
    return this.http.get(this.base_url + 'contact/getContact');
  }

  constructor(private http: HttpClient) { }
}
