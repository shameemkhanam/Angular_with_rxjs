import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    
    // Ex-01
    const source = interval(1000);
    source.pipe( take(5), toArray()).subscribe((res)=>{
      console.log('toArray ex 1:', res); 
      this.du.print(res,'elContainer1');
    });

    //Ex-02
    const users = [
      {name:'abc', rollno:10},
      {name:'def', rollno:20},
      {name:'ghi', rollno:30}
    ];
    const source2 = from(users);
    source2.pipe(toArray()).subscribe((res)=>{
      console.log('from arr of obj:',res);  
      this.du.print(JSON.stringify(res),'elContainer2');    
    });

    //Ex-03
    const source3 = of('khan','shameem','begum');
    source3.pipe(toArray()).subscribe((res)=>{
      console.log('of:',res);  
      this.du.print(res,'elContainer3');
    });
  }
}
