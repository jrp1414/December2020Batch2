import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Student } from '../services/student.data';
import { StudentGuard } from '../services/student.guard';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  firstStudentId: number;
  constructor(private ss: StudentService, private route: ActivatedRoute, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    // this.students = this.ss.getStudents();    
  }

  ngOnInit(): void {
    // this.refreshStudentsList();
    this.route.data.subscribe((data) => {
      this.students = data.stds;
    });
    this.ss.notify.subscribe((flag) => {
      this.refreshStudentsList();
    });
    this.primengConfig.ripple = true;
  }
  private refreshStudentsList() {
    this.ss.getStudents().subscribe((resp) => {
      this.students = resp;
    });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  // DeleteStudent(student: Student) {
  // this.showConfirm(student);
  // this.ss.DeleteStudent(student.StudentId).subscribe((s) => {
  //   this.refreshStudentsList();
  // });
  // }
  student: Student;
  DeleteStudent(student: Student) {
    this.student = student;
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure to delete ' + student.FirstName + ' ' + student.LastName + '?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.messageService.clear('c');
    this.ss.DeleteStudent(this.student.StudentId).subscribe((s) => {
      this.refreshStudentsList();
    });
  }

  onReject() {
    this.messageService.clear('c');
  }
}
