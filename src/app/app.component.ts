import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  //selector: '[app-root]',
  selector: '.app-root',
  // template:"<h1>Hello World</h1>"
  // template:`<h1>Hello World</h1>
  //           <h2>Multi line Html example</h2>
  // `
  templateUrl: "./app.component.html",
  // styles:[
  //   `div{background-color:yellow}`
  // ]
  styleUrls: [
    "./app.component.css"
  ]
})
export class AppComponent {
  name = "Test";
  name2: string = "";
  num1: number = 10;
  termsAndConditions: boolean = true;
  student: any = 10;
  // person1:Person = new Person();
  
}


