import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit{

  asyncVideo:any;
   
  constructor(private du: DesignUtilityService) {}

  ngOnInit(): void {
    this.du.asyncVideoEmit.subscribe((res)=>{
      this.asyncVideo = res;
    });
  }

  onVideoAdd(video: any) {
    console.log(video);
    this.du.asyncVideoEmit.next(video);
  }  

  onComplete(){
    this.du.asyncVideoEmit.complete();
  }

}
