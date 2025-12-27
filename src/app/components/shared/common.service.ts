import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://dummyjson.com';
  private baseUrl = 'https://countriesnow.space/api/v0.1';
  private localApiUrl = 'http://localhost:3001/api/v1';

  gteTestAPI() {
    return this.http.get(`${this.localApiUrl}/test`);
  }

  getCountryAPI() {
    return this.http.get(`${this.baseUrl}/countries/positions`);
  }

  getStatesAPI(country: any) {
    return this.http.post(`${this.baseUrl}/countries/states`, { country: country });
  }

  getCitiesAPI(country: any, state: any) {
    return this.http.post(`${this.baseUrl}/countries/state/cities`, { country, state });
  }

  getProductAPI() {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getUserAPI() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getRolebasedUser(role: any) {
    return this.http.get(`${this.apiUrl}/users?role=${role}`);
  }

  getTODOAPI() {
    return this.http.get(`${this.apiUrl}/todos`);
  }
}
