import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ProductService } from './services/product.service';
import isPrimeNumber from "prime-number";
import primeNumberList from 'prime-number/list';

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
    if (typeof Worker !== 'undefined') {
      this.webworker = new Worker('./app.worker',
        { type: 'module' });

      this.webworker.onmessage = (data) => {
        this.outputWorker=data.data;
      };
    }
  }
  name = "Test";
  name2: string = "";
  num1: number = 10;
  termsAndConditions: boolean = true;
  student: any = 10;
  // person1:Person = new Person();

  

  Test() {
    alert("Clicked");
  }

  number: number;
  output: number;
  calcFib() {
    this.output = fibonacci(this.number);
  }

  numberWorker: number;
  outputWorker: number = 0;
  private webworker: Worker;
  calcFibWorker() {
    this.webworker.postMessage(this.numberWorker);
  }
}

function fibonacci(num) {
  if (num == 1 || num == 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker('./app.worker', { type: 'module' });
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }