import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuccessStoryService {

  base_url: string = 'https://eventmandu.com/';

  constructor(private http: HttpClient) { }

  getSuccessStoryImages() {
    return this.http.get(this.base_url + 'success_story/getSuccessStory');
  }
}
