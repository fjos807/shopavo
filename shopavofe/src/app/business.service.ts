import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { };

  getBusiness(){
    return this.http.get('http://localhost:3000/api/business');
  }
};
