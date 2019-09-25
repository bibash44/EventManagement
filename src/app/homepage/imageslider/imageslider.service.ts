import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppServiceService} from '../../app-service.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesliderService {

  base_url = this.BASE_URL.publishBaseUrl();


  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {
  }

  getSliderImages() {
    return this.http.get(this.base_url + 'sliding_image/getImageSlider');
  }

}
