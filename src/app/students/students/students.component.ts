import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Student } from '../services/student.data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {

  students: Student[];
  firstStudentId: number;
  constructor(private ss: StudentService,private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.students = this.ss.getStudents();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
