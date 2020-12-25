import {Component} from "@angular/core";

@Component({
    selector:"app-si",
    templateUrl:"./string-interpolation.component.html"
})
export class StringInterpolationComponent {
    name = "Ram";
    name2: string = "";
    num1: number = 10;
    termsAndConditions: boolean = true;
    student: any = 10;
}