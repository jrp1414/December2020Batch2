import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm:FormGroup;
  // firstName:FormControl = new FormControl();
  // lastName:FormControl = new FormControl();
  student:Student;
  constructor(private route:ActivatedRoute,private ss:StudentService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parms)=>{
      this.student = this.ss.getStudent(parms.id);
      this.studentEditForm = new FormGroup({
        FirstName: new FormControl(this.student.FirstName),
        LastName: new FormControl("acsdsv") 
      }); 
    });
    
  }

  onSubmit(){
    console.log(this.studentEditForm.value);
  }

}
