import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httClient: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    console.log('https://fakestoreapi.com/products');
    return this.httClient.get<Product[]>('https://fakestoreapi.com/products');
  }
}
