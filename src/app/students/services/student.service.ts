import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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
  setOptions() {
    // let token = localStorage.getItem("token");
    // let header: HttpHeaders = new HttpHeaders({
    //   "authorization": "Bearer " + token
    // });
    // let options: { [key: string]: HttpHeaders } = {headers:header};
    // return options;

    return {
      headers: new HttpHeaders({
        "authorization": "Bearer " + localStorage.getItem("token")
      })
    };
  }

  studentId: number;
  notify: EventEmitter<boolean> = new EventEmitter();
  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl + "GetStudents");
  }

  getStudent(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "GetStudent/" + id);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.baseUrl + "UpdateStudent", student);
  }

  addStudent(student: Student): Observable<any> {
    return this.http.post(this.baseUrl + "AddStudent", student);
  }

  DeleteStudent(id: number) {
    return this.http.delete(this.baseUrl + "DeleteStudent/" + id);
  }
}
