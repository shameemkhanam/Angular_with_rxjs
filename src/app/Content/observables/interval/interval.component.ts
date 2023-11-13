import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{
  obsRes="";
  videoSubscription!: Subscription;
  videoSubscriptionTimer!: Subscription;

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    const broadcastVideos = interval(1000);
    const broadcastVideosTimer = timer(5000,1000);

    this.videoSubscription = broadcastVideos.subscribe((res)=>{
      console.log(res);
      this.obsRes = `Video ${res}`;

      this.du.print(this.obsRes, 'elContainer');
      this.du.print(this.obsRes, 'elContainer2');
      this.du.print(this.obsRes, 'elContainer3');

      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    });

    this.videoSubscriptionTimer = broadcastVideosTimer.subscribe((res)=>{
      console.log(res);
      this.obsRes = `Video ${res}`;

      this.du.print(this.obsRes, 'elContainerTimer');
      this.du.print(this.obsRes, 'elContainerTimer2');
      this.du.print(this.obsRes, 'elContainerTimer3');

      if(res >= 5){
        this.videoSubscriptionTimer.unsubscribe();
      }
    });


  }
}
