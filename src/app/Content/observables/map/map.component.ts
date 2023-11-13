import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  subs1!:Subscription;
  msg1: any;
  subs2!:Subscription;
  msg2: any;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    
    const broadcastVideos = interval(1000);

    //Ex 01
    this.subs1 = broadcastVideos.pipe(map(data => 'Video '+data)).subscribe((res)=>{
      // console.log(res);  
      this.msg1 = res;    
    });

    setTimeout(() => {
      this.subs1.unsubscribe();
    }, 5000);

    //Ex 02
    this.subs2 = broadcastVideos.pipe(map(data => data*3)).subscribe((res)=>{
      // console.log(res);
      this.msg2 = res;
    });
    setTimeout(() => {
      this.subs2.unsubscribe();
    }, 5000);

    //Ex 03
    const members =from([
      {id:1, name:'aaa'},
      {id:2, name:'bbb'},
      {id:3, name:'ccc'},
      {id:4, name:'ddd'},
      {id:5, name:'eee'},
    ]);

    members.pipe(map(data => data.name)).subscribe((res)=>{
      console.log(res);
      this.du.print(res,'elContainer');
    });

  }

}
