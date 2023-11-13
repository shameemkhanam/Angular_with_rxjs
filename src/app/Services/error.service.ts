import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(err:HttpErrorResponse){
    console.log(err);
    let errMsg='';
      if(!err.error || !err.error.error){
        console.log('Network error');
        errMsg='Network error! please try after some time.';
      }
      else{
        errMsg = 'Unknown error.';
      }

      return throwError(errMsg);
  }
}
