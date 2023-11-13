import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time-distinct-uc',
  templateUrl: './debounce-time-distinct-uc.component.html',
  styleUrls: ['./debounce-time-distinct-uc.component.scss']
})
export class DebounceTimeDistinctUCComponent implements AfterViewInit{

  @ViewChild('myinput') myInput!:ElementRef;
  reqData:any=null;
  @ViewChild('myinput2') myInput2!:ElementRef;
  reqData2:any=null;

  constructor(){}  

  ngAfterViewInit(): void {
    //Ex01 debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup')
    .pipe(map(e => e.target.value),
    debounceTime(1000));

    searchTerm.subscribe((res)=>{
      console.log(res);
      this.reqData = res;
      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    });

    //Ex02 distinctUntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement,'keyup')
    .pipe(map(e => e.target.value),
    debounceTime(1000),
    distinctUntilChanged());

    searchTerm2.subscribe((res)=>{
      console.log(res);
      this.reqData2 = res;
      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }

}
