import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClientsEditService {
  private url = 'http://localhost:1954/clients/getClients';

  constructor(private http: HttpClient) {
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

