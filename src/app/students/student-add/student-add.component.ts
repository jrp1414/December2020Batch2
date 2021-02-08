import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styles: []
})
export class StudentAddComponent implements OnInit {
  studentAddForm: FormGroup;
  student: Student;

  constructor(public route: ActivatedRoute, private ss: StudentService,
    public fb: FormBuilder,private router:Router) { }
    
  ngOnInit(): void {
    this.studentAddForm = this.fb.group({
      FirstName: ["", [Validators.required, Validators.minLength(3)]],
      LastName: this.fb.control("", Validators.required),
      MobileNo: this.fb.control("", Validators.pattern("[0-9 ]{10}")),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      NotificationType: this.fb.control('email'),
      // Age: this.fb.control(0, Range(10, 25)), //RangeValidation,
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(""),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });

    this.studentAddForm.get("NotificationType").valueChanges.subscribe((value) => {
      this.SetNotification(value);
    });
  }

  onSubmit() {
    this.ss.addStudent(this.studentAddForm.value).subscribe((resp) => {
      this.ss.notify.emit(true);
      this.router.navigate(["students"]);
    });
  }

  SetNotification(notificationType: string) {
    let mobileNoControl = this.studentAddForm.get("MobileNo");
    let AddLine1Control = this.studentAddForm.get("Address.AddLine1");
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
