import { Component } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      image: '../../../assets/product01.avif',
      price: 100
    },

    {
      id: 2,
      name: 'Product 2',
      image: '../../../assets/product01.avif',
      price: 100
    },

    {
      id: 3,
      name: 'Product 3',
      image: '../../../assets/product01.avif',
      price: 100
    },

    {
      id: 4,
      name: 'Product 4',
      image: '../../../assets/product01.avif',
      price: 100
    }

  ];
}
