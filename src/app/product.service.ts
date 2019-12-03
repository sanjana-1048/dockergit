import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://192.168.1.20:9898/products'

  constructor(private http:HttpClient) { }
  getProducts()
  {
    return this.http.get(this.url)
  }
}
