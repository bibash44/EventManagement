import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  base_url = 'http://localhost:1954/';


  getAllImages() {
    return this.http.get(this.base_url + 'portfolio/getPortfolio');
  }

  constructor(private http: HttpClient) {

  }
}
