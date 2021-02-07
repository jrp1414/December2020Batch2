import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, students } from './student.data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: Student[] = students;
  constructor(private http: HttpClient) {
    // this.studentId = this.studentsList[0].StudentId;
  }

  baseUrl: string = "http://localhost:44319/";

  studentId: number;
  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl + "GetStudents");
  }

  getStudent(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "GetStudent/" + id);
  }

  updateStudent(student:Student): Observable<any> {
    return this.http.put(this.baseUrl + "UpdateStudent",student);
  }

  DeleteStudent(id: number) {
    this.studentsList = this.studentsList.filter((s) => s.StudentId != id);
  }
}
