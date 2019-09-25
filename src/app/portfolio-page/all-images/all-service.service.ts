import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppServiceService} from '../../app-service.service';


@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  base_url = this.BASE_URL.publishBaseUrl();

  getAllImages() {
    return this.http.get(this.base_url + 'portfolio/getPortfolio');
  }

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {

  }
}
