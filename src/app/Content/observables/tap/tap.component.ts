import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, take, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  subs!:Subscription;
  subs2!:Subscription;
  myColor!: string;

  constructor(private du: DesignUtilityService){}

  ngOnInit(): void {
    const source = interval(1000);
    

    //Ex 01
    const arr = ['aaa','bbb','ccc','ddd','eee'];
    this.subs = source.pipe(
      tap(res => {
        // console.log('tap before:',res);
        if(res == 4){
          this.subs.unsubscribe();
        }
      }),
      map(d => arr[d]),
      tap(res => console.log('tap after:',res) ))
      .subscribe((res)=>{
      // console.log(res);
      this.du.print(res,'elContainer');
    });

    //Ex 02
    const colors=['red','green','orange','purple','brown'];
    this.subs2 = source.pipe(
      tap(res => {
        this.myColor = colors[res];
        console.log('tap :',res); 
        if(res == 4){
          this.subs2.unsubscribe();
        }       
      }),
      map(d => colors[d]),
      )
      .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer2');
    });



  }
}
