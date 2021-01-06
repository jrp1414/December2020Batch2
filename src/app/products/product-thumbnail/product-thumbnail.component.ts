import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/services/product';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent {
  // @Input() product:Product;
  @Input("prd") product:Product;
  @Output("sd") sendData:EventEmitter<string> = new EventEmitter<string>();


  constructor() { 
    //var person1:Person = new Person("Amol");
    
  }

  SendToParent(){
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
