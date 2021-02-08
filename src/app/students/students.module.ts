import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentGuard } from './services/student.guard';
import { StudentEditDeactivateGuard } from './services/studentedit-candeactivate.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "students", component: StudentsComponent,
    children: [
      { path: "add", component: StudentAddComponent },
      { path: ":sid", component: StudentDetailsComponent, canActivate: [StudentGuard] }, //students/1
      { path: ":id/edit", component: StudentEditComponent  } //students/1/edit - Edit Component      canDeactivate: [StudentEditDeactivateGuard]
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
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    MessageService
  ]
})
export class StudentsModule { }
