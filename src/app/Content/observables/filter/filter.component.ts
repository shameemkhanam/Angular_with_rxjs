import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  data:any;
  data2:any;
  data3:any;
  dataArr = [
    { id: 1, name: 'shama', gender: 'female' },
    { id: 2, name: 'reema', gender: 'female' },
    { id: 3, name: 'rajesh', gender: 'male' },
    { id: 4, name: 'swathi', gender: 'female' },
    { id: 5, name: 'ramesh', gender: 'male' },
  ];

  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArr);

    //Ex 01- filter by length
    source.pipe(filter(mem => mem.name.length==5),toArray()).subscribe((res)=>{
      console.log(res);
      this.data = res;
    });

    //Ex 02- filter by gender
    source.pipe(filter(mem => mem.gender == 'female'),toArray()).subscribe((res)=>{
      console.log(res);
      this.data2 = res;
    });

    //Ex 03- filter by nth item
    source.pipe(filter(mem => mem.id<=3),toArray()).subscribe((res)=>{
      console.log(res);
      this.data3 = res;
    });
  }
}
