import { Component, OnInit } from '@angular/core';
import { Product, productList } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    `./products.component.css`
  ]
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

  getStyle(prod: Product) {
    if (prod.currentAvailibility && prod.starRating > 3) {
      return { backgroundColor: 'lime', color: 'maroon', fontWeight: 'bold' };
    }
  }

  getClass(prod: Product) {
    if (prod.starRating > 3) {
      if (prod.currentAvailibility) {
        // return "green font";
        return ["green", "font"];
      }
      return "green";
    } else if (prod.starRating <= 3) {
      if (prod.currentAvailibility) {
        return "red font";
      }
      return "red";
    }
  }

}
