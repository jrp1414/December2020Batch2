import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent {

  constructor() { }

  OnewayMessage:string="";
  OneWayChange(data){
    this.OnewayMessage = data.target.value;
  }


  TwowayMessage:string="";
  TwowayChange(data:string){
    this.TwowayMessage = data.toLowerCase();
  }

}
