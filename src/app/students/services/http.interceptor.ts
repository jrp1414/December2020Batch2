import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class December2InterCeptor implements HttpInterceptor {

    constructor(private ms: MessageService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem("token");
        const headers = req.headers.set("authorization", "Bearer " + token);
        const newReq = req.clone({ headers });
        return next.handle(newReq).pipe(
            tap(() => {
                // this.ms.add({ severity: 'success', summary: 'Success', detail: 'HTTP Request Success' });  
            }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401) {
                        this.ms.add({ severity: 'error', summary: 'Error', detail: 'Unauthorized user' });
                    }
                    if (error.status == 500) {
                        this.ms.add({ severity: 'error', summary: 'Error', detail: 'Internal Server Error' });
                    }
                }
            })
        );
    }
}