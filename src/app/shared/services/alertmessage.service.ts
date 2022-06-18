import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertmessageService {

  constructor(
    private toastr: ToastrService
  ) { }
  
  public showSuccessMsg(message:string,title?:string){      
    this.toastr.success(message, title ? title : 'Success!!', {
      disableTimeOut: false,
      timeOut: 5000,
      extendedTimeOut:1000,
      progressBar:true,
      tapToDismiss: true
    });
  }

  public showErrorMsg(message:string,title?:string){      
    this.toastr.error(message, title ? title : 'Error!!', {
      disableTimeOut: false,
      timeOut: 5000,
      extendedTimeOut:1000,
      progressBar:true,
      tapToDismiss: true
    });
  }

  public showWarningMsg(message:string,title?:string){      
    this.toastr.warning(message, title ? title : 'Warning!!', {
      disableTimeOut: false,
      timeOut: 5000,
      extendedTimeOut:1000,
      progressBar:true,
      tapToDismiss: true
    });
  }

  public clearMsg(){
    this.toastr.clear();
  }

}


