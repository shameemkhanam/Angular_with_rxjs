import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit,OnDestroy{

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    this.du.observables.next(true);
  }

  ngOnDestroy(): void {
    this.du.observables.next(false);
  }

}
