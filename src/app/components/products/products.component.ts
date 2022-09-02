import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  myShoppingCart: Product [] = [];
  total: number = 0;
  today= new Date();
  date= new Date(2022,5,5);

  products: Product [] = [
   /* {
      id: 1,
      name: 'Liverpool Home 2022-2023',
      image: './assets/images/liv_home_2022-2023.jpg',
      price: 100
    },
    {
      id: 2,
      name: 'Liverpool Away 2022-2023',
      image: './assets/images/liv_away_2022-2023.jpg',
      price: 100
    },
    {
      id: 3,
      name: 'Liverpool Home GK 2022-2023',
      image: './assets/images/liv_home_gk_2022-2023.jpg',
      price: 100
    },
    {
      id: 4,
      name: 'Liverpool Pre Match 2022-2023',
      image: './assets/images/liv_pre_match_red_2022-2023.jpg',
      price: 100
    }*/
  ];

  constructor(private storeService: StoreService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (response: Product[]) =>{
        console.log(response);
        this.products = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  onAddToShoppingCart(product: Product){
    console.log(product);
    //this.myShoppingCart.push(product);
    //this.total += product.price;
    //this.total = this.myShoppingCart.reduce((sum, item)=>sum+item.price,0);

    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }



}
