import { Component } from '@angular/core';
import { Product } from './models/product.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
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

  onLoaded(img: string){
    console.log('log padre', img);
  }


}
