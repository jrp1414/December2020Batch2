import { NoPreloading, PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent, ProductsComponent } from './components.index';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Route[] = [
    { path: "", component: DashboardComponent },
    { path: "home", component: DashboardComponent },
    { path: "products", component: ProductsComponent },
    { path: "productdetails/:id", component: ProductDetailsComponent }, //productdetails/45
    { path: "signup", component: SignupComponent },
    { path: "students", loadChildren: () => import("./students/students.module").then(m => m.StudentsModule) },
    { path: "**", redirectTo: "home" }
];

@NgModule({
    imports: [
        QuicklinkModule,
        RouterModule.forRoot(routes,{preloadingStrategy:QuicklinkStrategy})
    ],
    exports: [
        QuicklinkModule,
        RouterModule
    ],
})
export class AppRoutingModule { }
