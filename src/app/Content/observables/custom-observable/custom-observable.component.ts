import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy{
  techStatus: any;
  techStatus2: any;
  name: any;
  nameStatus:any;
  subs2!:Subscription;

  constructor(private du: DesignUtilityService){}

  ngOnInit(): void {
    
    //Ex-01 (manual)
    const custObs = Observable.create((observer: any)=>{
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
        // observer.error('limit exceed...'); 
      }, 2000);
      setTimeout(() => {
        observer.next('HTML');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('CSS');               
      }, 4000);     
    });
    custObs.subscribe((res: any)=>{
      // console.log('custom obs:',res);  
      this.du.print(res,'elContainer');
    },(error: any)=>{
      this.techStatus = 'error';
    },
    ()=>{
      this.techStatus = 'completed';
    });

    //Ex-02 (custom interval)
    const arr2 = ['Angular','Typescript','HTML','CSS'];
    const custObs2 = Observable.create((observer:any)=>{
      // let count=1;
      let count=0;
      setInterval(()=>{
        // observer.next('Data emit'+count);
        observer.next(arr2[count]);

        if(count>=2){
          observer.error('error emit');
        }
        
        // if(count>=3){
        //   observer.complete();
        // }
        count++;
      },1000);
    });

    this.subs2 = custObs2.subscribe((res:any)=>{
      // console.log('ex2 data:',res);
      this.du.print(res,'elContainer2');
    },(error: any)=>{
      this.techStatus2 = 'error';
    },
    ()=>{
      this.techStatus2= 'completed';
    });


    //Ex-03 (random names)
    const arr3 = ['Geetha', 'Bina', 'Meena','John','Alex'];
    const custObs3 = Observable.create((observer:any)=>{
      // let count=1;
      let count=0;
      setInterval(()=>{
        // observer.next('Data emit'+count);
        observer.next(arr3[count]);

        if(count>=2){
          // observer.error('error while emitting..');
        }
        
        if(count>=4){
          observer.complete();
        }
        count++;
      },1000);
    });

    custObs3.subscribe((res: any)=>{
      console.log(res);
      this.name = res;
    },(error: any)=>{
      this.nameStatus = 'error';
    },
    ()=>{
      this.nameStatus = 'completed';
    });

  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}
