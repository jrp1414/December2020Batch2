import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StudentService } from "./student.service";

@Injectable({
    providedIn:"root"
})
export class StudentGuard implements CanActivate{
    constructor(private ss:StudentService,private router:Router) {
    
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let student = this.ss.getStudent(route.params.sid);
        if (student) {
            return true;
        }
        alert("Invalid Student Id");
        this.router.navigate(["/students"]);
        return false;
    }    
}