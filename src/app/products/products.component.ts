import { Component, OnInit } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddCart, DeleteCart } from '../ngxs-store/product.action';
import { CartState, CartStateModel } from '../ngxs-store/product.state';
import { LoggerService } from '../services/logger.service';
import { Description, Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    `./products.component.css`
  ],
  providers: [
    // LoggerService,
    //ProductService
  ]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filterText: string = "";
  cart: string[] = [];

  @Select(CartState) cart$: Observable<CartStateModel>;

  constructor(public logger: LoggerService, public ps: ProductService,
    private store: Store) {
    // this.ps.getProducts().subscribe((products)=>{console.log(products)});
    this.ps.getProducts().subscribe(p=>this.products=<Product[]>p);
  }
  ngOnInit(): void {
    this.cart$.subscribe(c => this.cart = c.cart); 

  }
  ReceivedData(data) {
    this.store.dispatch(new AddCart(data));
  }

  DeleteFromCart(cartP){
    this.store.dispatch(new DeleteCart(cartP));
  }

  TestPipe() {
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


