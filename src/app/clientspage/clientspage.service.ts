import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientspageService {

  base_url: string = 'http://localhost:1954/';

  constructor(private http: HttpClient) { }

  getClientsDetails() {
    return this.http.get(this.base_url + 'clients/getClients');
  }
}
