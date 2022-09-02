import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private httClient: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    console.log(this.apiUrl);
    //return this.httClient.get<Product[]>('https://fakestoreapi.com/products');
    return this.httClient.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number):Observable<Product>{
    console.log(`${this.apiUrl}/${id}`);
    return this.httClient.get<Product>(`${this.apiUrl}/${id}`);
  }
}
