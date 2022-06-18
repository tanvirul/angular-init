import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertmessageService } from './shared/services/alertmessage.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    private timeout: any = null;

    constructor(
        private message: AlertmessageService,
        private spinner: NgxSpinnerService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errMsg = '';
                    if (error.error instanceof ErrorEvent) {
                        errMsg = `Error: ${error.error.message}`;
                    }
                    else {
                        if(error.status == 401)
                            errMsg = `Error Code: ${error.status},  Message: Please Login again.`;                      
                        else if(error.status == 403)
                            errMsg = `Error Code: ${error.status},  Message: You are not authorized for this action.`;
                        else if(error.status == 500)
                            errMsg = `Error Code: ${error.status},  Message: Internal Server Error.`;
                        else
                            errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    }

                    this.spinner.hide();
                    this.message.showErrorMsg(errMsg); 
                    this.timeout && clearTimeout(this.timeout);
                    this.timeout.setTimeout(() => {
                        this.message.clearMsg();
                    }, 2000);
                    return throwError(errMsg);
                })
            )
    }
}