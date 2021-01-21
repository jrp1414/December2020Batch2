import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
//import {Observable, Subscription} from "rxjs-compat";
import {Observable, Observer, Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit,OnDestroy {
  // numSubs:Subscription;
  constructor() { }
  
  counter:number;
  ngOnInit(): void {
    // let numObs = Observable.interval(1000);
    // this.numSubs = numObs.subscribe((num)=>{
    //   console.log(num);
    //   this.counter = num;
    // });

    // let obs = new Observable((observer:Observer<string>)=>{
    //   setTimeout(() => {
    //     observer.next("First Data released");
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next("Second Data released");
    //   }, 3000);

    //   setTimeout(() => {
    //     observer.next("Third Data released");
    //   }, 5000);

    //   // setTimeout(() => {
    //   //   observer.error("Error occurred");
    //   // }, 6000);

    //   setTimeout(() => {
    //     observer.complete();
    //   }, 6000);

      
    //   setTimeout(() => {
    //     observer.next("Fourth Data released");
    //   }, 7000);
    // });

    // obs.subscribe(
    //   (data)=>{console.log(data);},
    //   (error)=>{console.error(error);},
    //   ()=>{console.log("Completed")});

    // let subObs = new Subject();
    // setTimeout(() => {
    // subObs.next("First Subject");  
    // }, 1000); 

    // setTimeout(() => {
    //   subObs.next("Second Subject");
    // }, 2000); 
    // setTimeout(() => {
    //   subObs.next("Third Subject");
    // }, 3000); 

    // subObs.subscribe((data)=>{
    //   console.log(data);
    // });

    let ee = new EventEmitter();
    ee.emit("Data Emitted");

    ee.subscribe((data)=>{
      console.log(data);
    });

  }

  ngOnDestroy(): void {
    //this.numSubs.unsubscribe();
  }

}
