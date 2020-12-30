import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent {
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";
  disableButton: boolean = true;
  imageWidth:number=100;
  imageHeight:number=100;
  constructor() {
    setTimeout(() => {
      this.imageUrl = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
      this.disableButton = false;
    }, 5000);
  }

}
