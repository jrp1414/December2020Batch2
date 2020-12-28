import { Component } from "@angular/core";

@Component({
    selector: "app-si",
    templateUrl: "./string-interpolation.component.html"
})
export class StringInterpolationComponent {

    constructor() {
        //this.person = new Person("Amit","Mumbai");
        // this.person.Name = "Amol";
        // this.person.Address = "Pune";
    }

    name = 0;
    name2: string = "";
    num1: number = 10;
    num2: number = 20;
    termsAndConditions: boolean = true;
    student: any = 10;
    person: Person = new Person("Anil",new Address("Hadapsar","Pune"));
    person2: Person = new Person("Amit");

    getName():string{
        return "Some Name";
    }
    // getName(name1:string,name2:string):string{
    //     return 10;
    // }
}

// class Person {
//     constructor(name:string,address:string){
//         this.Name = name;
//         this.Address = address;
//     }
//     Name: string;
//     Address: string;
// }
class Person {
    constructor(public Name:string,public Address?:Address){
        
    }
    
}

class Address{
    constructor(public AddLine1:string,public City:String) {
        
    }
}