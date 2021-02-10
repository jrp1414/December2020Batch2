import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { StudentService } from "./student.service";

@Injectable({
    providedIn:"root"
})
export class StudentGuard implements CanActivate{
    constructor(private ss:StudentService,private router:Router,private ms:MessageService) {
    
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let student = this.ss.getStudent(route.params.id);
        if (student) {
            // this.ms.add({severity:'error', summary: 'Error', detail: 'Invalid Student Id'});
            return true;
        }        
        this.router.navigate(["/students"]);
        return false;
    }    
}