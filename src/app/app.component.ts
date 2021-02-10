import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ProductService } from './services/product.service';

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
  ],
  providers: [
    // ProductService
  ]
})
export class AppComponent implements OnInit {
  loading = false;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
        case event instanceof NavigationCancel: {
          this.loading = false;
          break;
        }
        default:
          break;
      }
    });
  }
  name = "Test";
  name2: string = "";
  num1: number = 10;
  termsAndConditions: boolean = true;
  student: any = 10;
  // person1:Person = new Person();

}


