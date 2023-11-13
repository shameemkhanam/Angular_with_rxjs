import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, catchError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  // url = 'https://fakestoreapi.com/products/category/electronics';
  url = 'https://fakestoreapi.com/';


  exclusive = new Subject<boolean>();

  // username = new Subject<string>();
  username = new BehaviorSubject<string>('Anup');

  videoEmit = new ReplaySubject<string>(3,5000);

  asyncVideoEmit = new AsyncSubject();

  constructor(private http:HttpClient,private errorService:ErrorService) { }

  print(val: any, containerId: any ){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val: any, containerId: any ){
    let el = document.createElement('div');
    el.setAttribute('class','item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el);
  }

  getElectronicsProducts(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.errorService.handleError)
    );
  }
}
