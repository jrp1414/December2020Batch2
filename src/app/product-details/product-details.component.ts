import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private ps: ProductService, private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.params.id);
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);
    this.route.params.subscribe((parms) => {
      console.log(parms);
      this.product = this.ps.getProduct(parms.id);
    });

    this.route.queryParams.subscribe((qParms) => {
      console.log(qParms);
    });

    this.route.fragment.subscribe((f) => {
      console.log(f);
    });
  }

  GoBack(){
    this.router.navigate(["/products"]);
  }

}
