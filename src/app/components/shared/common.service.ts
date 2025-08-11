import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://dummyjson.com';
  private baseUrl = 'https://countriesnow.space/api/v0.1';

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
}
