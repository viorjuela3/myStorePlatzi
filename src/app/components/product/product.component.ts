import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title: '',
    category: '',
    description: '',
    price: 0,
    image: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor(){}

  ngOnInit(): void {

  }

 onAddCart(){
  this.addedProduct.emit(this.product);
 }

}
