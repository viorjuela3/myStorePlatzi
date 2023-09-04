import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [
    // { // esta es la creacion de una data en crudo ahora creare la data desde una llamada de una api
    //   id: 1,
    //   name: 'Product 1',
    //   image: '../../../assets/images/album.jpg',
    //   price: 100.000
    // },

    // {
    //   id: 2,
    //   name: 'Product 2',
    //   image: '../../../assets/images/bike.jpg',
    //   price: 150.000
    // },

    // {
    //   id: 3,
    //   name: 'Product 3',
    //   image: '../../../assets/images/books.jpg',
    //   price: 200.000
    // },

    // {
    //   id: 4,
    //   name: 'Product 4',
    //   image: '../../../assets/images/glasses.jpg',
    //   price: 150.000
    // },

    // {
    //   id: 5,
    //   name: 'Product 5',
    //   image: '../../../assets/images/house.jpg',
    //   price: 300.000
    // },

    // {
    //   id: 6,
    //   name: 'Product 6',
    //   image: '../../../assets/images/toy.jpg',
    //   price: 180.000
    // }

  ];
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productsService : ProductsService,

  ){
     this.myShoppingCart = this.storeService.getShoppingCart();
  }
  ngOnInit(): void{
    this.productsService.getAllProducts()
    .subscribe( data => {
      this.products = data;
    });
  }

  OnAddToShoppinCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
