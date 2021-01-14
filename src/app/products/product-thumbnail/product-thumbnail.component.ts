import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent implements OnInit {
  // @Input() product:Product;
  @Input("prd") product:Product;
  @Output("sd") sendData:EventEmitter<string> = new EventEmitter<string>();


  constructor(private logger:LoggerService,private ps:ProductService) { 
    //var person1:Person = new Person("Amol");
    
  }
  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      console.log("Received in Product Thumbnail: "+ data);      
    });
    
  }

  SendToParent(){
    this.logger.log("Testing in Child Component");
    var name = prompt("Enter Name");
    this.sendData.emit(name);
  }

}

// class Person{
//   constructor(public Name:string,public Address?:string){
//   }
// }

// class Person{
//   constructor(name:string,address:string){
//     this.Name = name;
//     this.Address = address;
//   }
//   Name:string;
//   Address:string;
// }
