import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesliderService {

  base_url: string = 'http://localhost:1954/';

  constructor(private http: HttpClient) { }

  getSliderImages() {
    return this.http.get(this.base_url + 'sliding_image/getImageSlider');
  }

}
