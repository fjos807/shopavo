import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Business } from '../model/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  store: Business;

  constructor(private http: HttpClient) { }

  getAllBusiness() {
    return this.http.get('http://localhost:3000/api/business');
  }

  getBusiness(id: string) {
    return this.http.get('http://localhost:3000/api/business/' + id);
  }

}
