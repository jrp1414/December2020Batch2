import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialModule } from '../shared/material/material.module';
import { PrimengModule } from '../shared/primeng/primeng.module';



@NgModule({
  declarations: [],
  exports:[
    FormsModule,
    PrimengModule,
    MaterialModule,
    MatGridListModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
