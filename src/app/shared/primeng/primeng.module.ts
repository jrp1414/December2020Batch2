import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  exports:[
    ToastModule,
    ButtonModule,
    RippleModule
  ]
})
export class PrimengModule { }
