import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit{

  constructor(private du:DesignUtilityService){}

  getData(data:any){
    return of(data + ' Video uploaded!').pipe(delay(2000)); //with 'of' it became now an observable
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);

    //Ex 01 map
    source.pipe(map(res => this.getData(res)))
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer');
    });

    //Ex 02 map+concatAll
    source.pipe(map(res => this.getData(res)),concatAll())
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer2');
    });

    //Ex 03 concatMap
    source.pipe(concatMap(res => this.getData(res)))
    .subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer3');
    });
  }

}
