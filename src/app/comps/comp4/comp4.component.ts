import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit{
  uname4_prac!:string;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    this.du.username_practice.subscribe((res)=>{
      this.uname4_prac = res;
    });
  }

  onChange4(uname4: { value: any; }){
    console.log(uname4.value);
    this.du.username_practice.next(uname4.value);
  }

}
