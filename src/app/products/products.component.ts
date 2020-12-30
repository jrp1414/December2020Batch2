import { Component, OnInit } from '@angular/core';
import { Product, productList } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent {
  products: Product[] = productList;
  constructor() {
    // for (let i = 0; i < this.products.length; i++) {
    //   console.log(this.products[i]);
    // }

    // for (let i in this.products) {
    //   console.log(this.products[i]);
    // }

    // this.products.forEach(product => {
    //   console.log(product);
    // });

    // for (let prod of this.products) {
    //   console.log(prod);
    // }

  }


}
