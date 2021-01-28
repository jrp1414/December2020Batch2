import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentGuard } from './services/student.guard';

const routes: Routes = [
  {
    path: "students", component: StudentsComponent,
    children: [
      { path: "add", component: StudentAddComponent },
      { path: ":sid", component: StudentDetailsComponent, canActivate:[StudentGuard] }, //students/1
      { path: ":id/edit", component: StudentEditComponent } //students/1/edit - Edit Component      
    ]
  }
];

@NgModule({
  declarations: [
    StudentsComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsModule { }
