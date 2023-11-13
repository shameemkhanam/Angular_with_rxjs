import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit{
  url='http://localhost:3000/posts';
  num:any=0;
  @ViewChild('btn')btn!:ElementRef;

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement,'click')
    .pipe(
      exhaustMap(()=>this.onSave(this.num++))
    )
    .subscribe(res =>{
      console.log(res);
      
    });
  }

  onSave(changes: any){
    return this.http.put(this.url,{data:changes});
  }

  

  

}
