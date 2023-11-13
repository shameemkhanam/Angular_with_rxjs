import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy{

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    this.du.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.du.exclusive.next(false);
  }
}
