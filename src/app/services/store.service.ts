  import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product [] = [];
  private myCart= new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  getMyShoppingCart(): Product[]{
    return this.myShoppingCart;

  }

  addProduct(product: Product){
    //console.log(product);
    this.myShoppingCart.push(product);
    //this.total += product.price;
    //this.total = this.myShoppingCart.reduce((sum, item)=>sum+item.price,0);

    this.myCart.next(this.myShoppingCart);
  }

  getTotal(): number{
    return this.myShoppingCart.reduce((sum, item)=>sum+item.price,0);
  }

}
