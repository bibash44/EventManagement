import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppServiceService} from '../../app-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewSectionService {

  base_url: string = this.BASE_URL.publishBaseUrl();

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {
  }

  getReviews() {
    return this.http.get(this.base_url + 'review');
  }
}
