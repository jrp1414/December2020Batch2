import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;
  student: Student;

  constructor(public route: ActivatedRoute, private ss: StudentService, public fb: FormBuilder) { }
  hobbies: FormArray = this.fb.array([
  ]);
  addresses: FormArray = this.fb.array([
    this.fb.group({
      AddLine1: this.fb.control(""),
      AddLine2: this.fb.control(""),
      AddLine3: this.fb.control(""),
      City: this.fb.control(""),
      State: this.fb.control("")
    })
  ]);
  ngOnInit(): void {
    this.route.params.subscribe((parms) => {
      this.student = this.ss.getStudent(parms.id);
      this.studentEditForm = this.fb.group({
        FirstName: this.fb.control(this.student.FirstName),
        LastName: this.fb.control(this.student.LastName),
        MobileNo: this.fb.control(this.student.MobileNo),
        EmailId: this.fb.control(this.student.EmailId),
        NotificationType: this.fb.control(this.student.NotificationType),
        Addresses: this.addresses,
        TermsAndConditions: this.fb.control(true),
        Skills: this.fb.control("Angular"),
        Comments: this.fb.control(""),
        Hobbies: this.hobbies
      })
    });
  }

  onSubmit() {
    console.log(this.studentEditForm.value);
  }

  AddHobby() {
    let hobbies = <FormArray>this.studentEditForm.get("Hobbies");
    if (hobbies.controls.length < 10) {
      (hobbies).push(this.fb.control(""));
    }
  }
  AddAddress() {
    let addresses = <FormArray>this.studentEditForm.get("Addresses");
    if (addresses.controls.length < 4) {
      (addresses).push(this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      }));
    }
  }

}
