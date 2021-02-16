import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { studentAction, StudentInfo } from 'src/app/store/student.action';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {
  student: Student;
  constructor(private ss: StudentService, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    // this.route.params.subscribe((parms) => {
    //   this.ss.getStudent(parms.id).subscribe((resp) => {
    //     this.student = resp;
    //   });
    // });

    this.route.data.subscribe((data) => {
      this.student = data.student;
      let student: StudentInfo = { lastSelectedId: this.student.StudentId };
      this.store.dispatch(studentAction({student})); 
    });
  }

}
