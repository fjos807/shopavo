import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  readonly URL_API = 'http://localhost:3000/api/product';

  constructor(private http: HttpClient) { };

  getProducts() {
    return this.http.get(this.URL_API);
  }

  getProductsByBusiness(product: Product) {
    return this.http.put(this.URL_API + '/$(product.businessId)', product);
  }

}
