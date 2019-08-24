import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AboutsUsPageeService {

  base_url = 'http://localhost:1954/';


  getAboutDetails() {
    return this.http.get(this.base_url + 'aboutus/getAboutUs');
  }

  constructor(private http: HttpClient) {

  }
}
