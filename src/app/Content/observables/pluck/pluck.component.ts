import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{
  data: any;
  data2:any;

  users=[
    {name:'aaa', skills:'Angular',job:{ title:'Frontend Developer', exp:'5 yrs'}},
    {name:'bbb', skills:'HTML',job:{ title:'React Developer', exp:'3 yrs'}},
    {name:'ccc', skills:'CSS',job:{ title:'UI Developer', exp:'2 yrs'}},
    {name:'ddd', skills:'React',job:{ title:'JS Developer', exp:'4 yrs'}},
  ];

  constructor(){}

  ngOnInit(): void {

    //Ex 01
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()).subscribe((res)=>{
      console.log(res);   
      this.data=res;   
    });

    //Ex 02
    from(this.users).pipe(
      // map(data => data.name),
      pluck('job','title'),
      toArray()).subscribe((res)=>{
      console.log(res);   
      this.data2=res;   
    });


  }

  

}
