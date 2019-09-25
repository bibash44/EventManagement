import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppServiceService} from '../../app-service.service';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {
  base_url = this.BASE_URL.publishBaseUrl();

  type = 'Party';

  getPartyImages() {
    return this.http.get(this.base_url + 'portfolio/get_portfolio_type/' + this.type);
  }

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {

  }

}
