import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obs2msg:any;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    const obs1 = of('Video 1', 'Video 2', 'Video 3');

    obs1.subscribe((res)=>{
      console.log('of:',res);
      this.du.print(res,'elContainer');
    });

    const obs2 = of({a:'Video 1', b:'Video 2',c: 'Video 3'});

    obs2.subscribe((res)=>{
      this.obs2msg = res;
      console.log('of obj:',res);      
    });

    //from -array
    let array = ['Video 1', 'Video 2', 'Video 3']
    const obs3 = from(array);
    obs3.subscribe((res)=>{
      this.du.print(res,'elContainer3');
      console.log('from array:',res);
    });

    //from - promise
    const promise = new Promise((resolve)=>{
      setTimeout(() => {
        resolve("Promise resolved");
      }, 3000);
    });
    promise.then((res)=>{
      // console.log(res);      
    });
    const obs4 = from(promise);
    obs4.subscribe((res)=>{
      this.du.print(res,'elContainer4');
      console.log('from promise',res);
    });

    //from - string
    const obs5 = from("welcome to angular");
    obs5.subscribe((res)=>{
      this.du.print(res,'elContainer5');
      console.log('from string',res);
    });
  }

}
