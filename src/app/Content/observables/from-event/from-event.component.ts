import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {
  @ViewChild('addBtn')
  addbtn!: ElementRef;

  constructor(private _du:DesignUtilityService){}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe((res)=>{
      let countVal = `Video ${count++}`;
      console.log(countVal); 
      this._du.print(countVal, 'elContainer'); 
      this._du.print(countVal, 'elContainer2');    
    }); 
  }

  
}
