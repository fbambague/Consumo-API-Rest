import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateProductDTO } from '../dto/createProductDTO.model';
import { UpdateProductDTO } from '../dto/updateProductDTO.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';
  private apiUrl = '/api/products';

  constructor(private httClient: HttpClient) { }


  getAllProducts():Observable<Product[]>{
    console.log(this.apiUrl);
    //return this.httClient.get<Product[]>('https://fakestoreapi.com/products');
    return this.httClient.get<Product[]>(this.apiUrl);
  }

  /*
  // Parametros Limit y Offset opcionales
  getAllProducts(limit?: number, offset?: number):Observable<Product[]>{
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httClient.get<Product[]>(this.apiUrl,{params});
  }
  */

  getProduct(id: number):Observable<Product>{
    console.log(`${this.apiUrl}/${id}`);
    return this.httClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: CreateProductDTO):Observable<Product>{
    console.log(this.apiUrl);
    return this.httClient.post<Product>(this.apiUrl,product);
  }

  updateProduct(id:number, product: UpdateProductDTO): Observable<Product>{
    console.log(`${this.apiUrl}/${id}`);
    return this.httClient.put<Product>(`${this.apiUrl}/${id}`,product);
  }

  deleteProduct(id: number):Observable<boolean>{
    console.log(`${this.apiUrl}/${id}`);
    return this.httClient.delete<boolean>(`${this.apiUrl}/${id}`);
  }

  getProductsByPage(limit: number, offset: number){
    return this.httClient.get<Product[]>(`${this.apiUrl}`,{
      params:{limit, offset}
    });
  }

}
