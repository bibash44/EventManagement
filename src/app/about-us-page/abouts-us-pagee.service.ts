import { AppServiceService } from './../app-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AboutsUsPageeService {



  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {

  }

  base_url = this.BASE_URL.publishBaseUrl();


  getAboutDetails() {
    return this.http.get(this.base_url + 'aboutus/getAboutUs');
  }
}
