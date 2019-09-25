import { AppServiceService } from './../../../../app-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AboutUsEditService {
  // private url = 'https://eventmandu.com/aboutus/getAboutUs';
  private url = this.BASE_URL.publishBaseUrl() + 'aboutus/getAboutUs';

  constructor(private http: HttpClient, private BASE_URL: AppServiceService) {
  }

  getData() {
    return this.http.get(this.url).pipe(
      tap(_ => this.log('data')),
      catchError(this.handleError())
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return null;
  }


  private log(data: string) {
    return null;
  }
}

