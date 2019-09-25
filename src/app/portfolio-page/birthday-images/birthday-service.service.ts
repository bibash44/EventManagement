import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppServiceService} from '../../app-service.service';

@Injectable({
  providedIn: 'root'
})
export class BirthdayServiceService {

  base_url = this.BASE_URL.publishBaseUrl();

  type = 'Birthday';

  getBirthdayImages() {
    return this.http.get(this.base_url + 'portfolio/get_portfolio_type/' + this.type);
  }

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {

  }
}
