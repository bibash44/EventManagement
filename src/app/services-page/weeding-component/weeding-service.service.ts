import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeedingServiceService {


  base_url = 'http://eventmandu.com/';
  type = 'Wedding';

  getWeedingServices() {
    return this.http.get(this.base_url + 'services/get_services_type/' + this.type);
  }

  constructor(private http: HttpClient) { }
}
