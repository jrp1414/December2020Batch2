import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsResolver } from './services/student-details.resolver';
import { StudentGuard } from './services/student.guard';
import { StudentsResolver } from './services/students.resolver';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    {
        path: "", component: StudentsComponent, resolve: { stds: StudentsResolver },
        children: [
            { path: "add", component: StudentAddComponent },
            { path: ":id", component: StudentDetailsComponent, resolve: { student: StudentDetailsResolver }, canActivate: [StudentGuard] }, //students/1
            { path: ":id/edit", component: StudentEditComponent, resolve: { student: StudentDetailsResolver } } //students/1/edit - Edit Component      canDeactivate: [StudentEditDeactivateGuard]
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentsRoutingModule { }
