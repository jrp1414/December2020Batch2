import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Range } from 'src/app/shared/directives/range.validator';
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

  constructor(public route: ActivatedRoute, private ss: StudentService,
    public fb: FormBuilder, private router: Router) { }
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
    this.studentEditForm = this.fb.group({
      FirstName: ["", [Validators.required, Validators.minLength(3)]],
      LastName: this.fb.control("", Validators.required),
      MobileNo: this.fb.control("", Validators.pattern("[0-9 ]{10}")),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      NotificationType: this.fb.control('email'),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });

    this.route.data.subscribe((data) => {
      this.student = data.student;
      this.studentEditForm.patchValue(this.student);
    });


    this.studentEditForm.get("NotificationType").valueChanges.subscribe((value) => {
      this.SetNotification(value);
    });
  }

  onSubmit() {
    this.ss.updateStudent({
      ...this.studentEditForm.value,
      StudentId: this.student.StudentId
    }).subscribe((resp) => {
      this.ss.notify.emit(true);
      this.router.navigate(["students"]);
    });
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

  SetNotification(notificationType: string) {
    let mobileNoControl = this.studentEditForm.get("MobileNo");
    let AddLine1Control = this.studentEditForm.get("Address.AddLine1");
    console.log(AddLine1Control);
    if (notificationType == 'mobile') {
      mobileNoControl.setValidators([Validators.required, Validators.pattern("[0-9 ]{10}")]);
    } else {
      mobileNoControl.clearValidators();
      mobileNoControl.setValidators([Validators.pattern("[0-9 ]{10}")]);
    }
    mobileNoControl.updateValueAndValidity();
  }

}

// function RangeValidation(control: AbstractControl):ValidationErrors|null {
//   if (control.value > 25 || control.value < 10) {
//     return { range: true };
//   }
//   return null;
// }
