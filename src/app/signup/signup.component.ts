import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,AfterViewInit {

  @ViewChild("signup") signUpForm;
  constructor() { }
  ngAfterViewInit(): void {
    //console.log(this.signUpForm);
  }

  ngOnInit(): void {
    
  }

  OnSubmit(){
    console.log(this.signUpForm);
  }

}
