import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Description, Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    `./products.component.css`
  ],
  providers:[
    // LoggerService,
    //ProductService
  ]
})
export class ProductsComponent {
  products: Product[];
  filterText:string="";
  constructor(private logger:LoggerService,private ps:ProductService) {
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

    this.products = this.ps.getProducts();
  }

  ReceivedData(data){
    this.logger.log("Logged from Parent Component");
    console.log(data);
  }

  TestPipe(){
    this.ps.notify.emit("Notification sent");
    //this.products.push(new Product(11,"Test Pipe Product","GFN-0034",new Date('25/12/2020'),25.52,5,"",new Description("Sample Desc","test@gmail.com"),true));
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


