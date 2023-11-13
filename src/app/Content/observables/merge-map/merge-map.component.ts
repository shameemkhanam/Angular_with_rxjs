import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit{

  constructor(private du:DesignUtilityService){}

  getData(data:any){
    return of(data + ' Video uploaded!'); //with 'of' it became now an observable
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);//now source is an observable

    //Ex 01 map
    source.pipe(map( res => this.getData(res)))
    .subscribe((res)=>{
      // console.log(res);   // gives 3 observables  
      this.du.print(res,'elContainer'); 
    });
    // .subscribe((res)=>{
    //   res.subscribe((res2)=>{
    //     console.log(res2);  
    //     this.du.print(res2,'elContainer');
    //   });
    // });

    //Ex 02 map+mergeAll
    source.pipe(map( res => this.getData(res)), mergeAll())
    .subscribe((res)=>{
      // console.log(res);   // gives 3 observables  
      this.du.print(res,'elContainer2'); 
    });

    //Ex 03 mergeMap
    source.pipe(mergeMap( res => this.getData(res)))
    .subscribe((res)=>{
      console.log(res);   // gives 3 observables  
      this.du.print(res,'elContainer3'); 
    });
    
  }

}
