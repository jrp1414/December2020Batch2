import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'temp-products',
  templateUrl: './temp-products.component.html',
  styles: [],
  providers:[
    //ProductService
  ]
})
export class TempProductsComponent implements OnInit {

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      console.log("Received in Temp Products : "+ data);
    });
  }

}
