import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AppComponent, EventBindingComponent, HeaderComponent, StringInterpolationComponent,
  PropertyBindingComponent, TwowayBindingComponent, HomeComponent, ProductsComponent,
  ProductThumbnailComponent, TempProductsComponent, DashboardComponent
} from "./components.index";

import { LoggerService } from './services/logger.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { December2InterCeptor } from './students/services/http.interceptor';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/student.reducer';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { CartState } from './ngxs-store/product.state';
import { environment } from 'src/environments/environment';
import {TemplateOutletExampleComponent } from './template-outlet-example/template-outlet-example.component';
import { CompleteComponent, NgComponentOutletCompleteExample } from './component-outlet-example/component-outlet-example.component';


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    TempProductsComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    SignupComponent,
    DashboardComponent,
    TemplateOutletExampleComponent,
    CompleteComponent,
    NgComponentOutletCompleteExample  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([CartState],{ developmentMode: !environment.production }),
    StoreModule.forRoot({ studentR: studentReducer })
  ],
  providers: [
    LoggerService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: December2InterCeptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }