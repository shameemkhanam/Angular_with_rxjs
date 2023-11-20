import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  exclusive:boolean=false;
  observables:boolean=false;
  promises:boolean = false;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    this.du.exclusive.subscribe((res)=>{
      this.exclusive = res;      
    });

    this.du.observables.subscribe((res)=>{     
      this.observables = res;
    });

    this.du.promises.subscribe((res)=>{
      this.promises = res;
    });
  }

}
