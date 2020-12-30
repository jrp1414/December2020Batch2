import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent {
  Message: string = "Hello";
  constructor() { }

  ButtonClicked() {
    alert("Button Clicked");
  }

  RightClicked() {
    alert("Right clicked");
  }

  OnMouseEnter() {
    this.Message = "Mouse Entered";
  }
  OnMouseLeave() {
    this.Message = "Mouse left";
  }

  inputText:string="";
  InputChanged(data){
    this.inputText = data.target.value;
  }
}
