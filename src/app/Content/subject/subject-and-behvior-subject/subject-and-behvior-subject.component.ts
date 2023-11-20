import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-subject-and-behvior-subject',
  templateUrl: './subject-and-behvior-subject.component.html',
  styleUrls: ['./subject-and-behvior-subject.component.scss']
})
export class SubjectAndBehviorSubjectComponent implements OnInit{
  userName!:string;
  uname_practice!:string;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    this.du.username.subscribe((res)=>{
      this.userName = res;
    });

    this.du.username_practice.subscribe((res)=>{
      this.uname_practice = res;
    });
  }

}
