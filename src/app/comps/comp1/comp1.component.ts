import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit{

  username!:string;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    this.du.username.subscribe((res)=>{
      this.username = res;
    });
  }

  onChange(uname1: any){
    console.log(uname1.value);
    this.du.username.next(uname1.value);
  }
}
