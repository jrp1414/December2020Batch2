import { Component, OnInit } from '@angular/core';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {

  students:Student[];
  firstStudentId:number;
  constructor(private ss:StudentService) {
    this.students = this.ss.getStudents();    
   }

  ngOnInit(): void {

  }

}
