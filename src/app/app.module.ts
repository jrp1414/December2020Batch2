import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import {AppComponent,EventBindingComponent,HeaderComponent,StringInterpolationComponent,
        PropertyBindingComponent,TwowayBindingComponent,HomeComponent} from "./components.index";

import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { LoggerService } from './services/logger.service';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StudentsModule } from './students/students.module';
import { SignupComponent } from './signup/signup.component';
import { MaxMinDirective } from './shared/directives/max-min.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MaterialModule } from './shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MessageService } from 'primeng/api';


const routes:Route[] = [
  {path:"",component: DashboardComponent},
  {path:"home",component:DashboardComponent},
  {path:"products",component: ProductsComponent},
  {path:"productdetails/:id",component: ProductDetailsComponent}, //productdetails/45
  {path:"signup",component: SignupComponent},
  // {path:"**",redirectTo:"home"}
];

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    SignupComponent,
    MaxMinDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StudentsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    MatGridListModule,
    LayoutModule
  ],
  providers: [
    LoggerService,
    MessageService
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }