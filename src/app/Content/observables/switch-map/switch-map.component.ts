import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  constructor(private du: DesignUtilityService) {}

  getData(data: any) {
    return of(data + ' Video uploaded!').pipe(delay(1000)); //with 'of' it became now an observable
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Ex 01 map
    source.pipe(map(data => this.getData(data)))
    .subscribe((res)=>{
      // console.log(res);
      this.du.print(res,'elContainer');
    });
    // .subscribe(res => {
    //   res.subscribe((res2) => {
    //     console.log(res2);
    //     this.du.print(res2,'elContainer');        
    //   });
    // })

    //Ex 02 map+switchAll
    source.pipe(map(data => this.getData(data)), switchAll()) //only last value is emitted
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer2');
    });

    //Ex 03 switchMap
    source.pipe(switchMap(data => this.getData(data))) 
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer3');
    });

    //Ex 01 mergeMap
    source.pipe(mergeMap(data => this.getData(data)))
    .subscribe((res)=>{
      // console.log(res);
      this.du.print(res,'elContainer4');
    });
    
    //Ex 02 concatMap
    source.pipe(concatMap(data => this.getData(data))) //only last value is emitted
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer5');
    });

    //Ex 03 switchMap
    source.pipe(switchMap(data => this.getData(data))) 
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer6');
    });


  }  
}
