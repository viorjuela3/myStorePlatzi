import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  total = 0;

  myCart$ = this.myCart.asObservable();

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0); // reduce() es un metodo de los arrays que se utiliza para iterar sobre los elementos de un array y acumular un resultado final
  }

  constructor() { }
}
