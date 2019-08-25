import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewSectionService {

  base_url: string = 'http://eventmandu.com/';

  constructor(private http: HttpClient) { }

  getReviews() {
    return this.http.get(this.base_url + 'review');
  }
}
