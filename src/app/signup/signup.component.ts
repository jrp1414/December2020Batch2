import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  // @ViewChild("signup") signUpForm;
  constructor(private auth: AuthService,private router:Router) { }
  ngAfterViewInit(): void {
    //console.log(this.signUpForm);
  }

  ngOnInit(): void {

  }

  // OnSubmit(){
  //   console.log(this.signUpForm);
  // }

  OnSubmit(value) {
    this.auth.signUp(value).subscribe(() => {
      this.router.navigate(["/home"]);
    });
  }

}
