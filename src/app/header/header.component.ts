import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { StudentService } from '../students/services/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public ss: StudentService, public auth: AuthService,
    private message: MessageService,private router:Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated = localStorage.getItem("token")?.length > 0;
  }

  onSignIn(signInForm: NgForm) {
    this.auth.signIn(signInForm.value).subscribe((resp: any) => {
      localStorage.setItem("token", resp.data);
      this.auth.isAuthenticated = true;
    }, (error: HttpErrorResponse) => {
      this.message.add({ severity: 'error', summary: 'Error', detail: "Invalid credentials" });
    });
  }

  onSignOut() {
    this.auth.isAuthenticated = false;
    localStorage.removeItem("token");
    this.router.navigate(['home']);
  }

}
