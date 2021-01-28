import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm:FormGroup;
  // firstName:FormControl = new FormControl();
  // lastName:FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.studentEditForm = new FormGroup({
      FirstName: new FormControl(),
      LastName: new FormControl() 
    });
  }

  onSubmit(){
    console.log(this.studentEditForm.value);
  }

}
