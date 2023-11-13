import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  user1List:any = ['Angular1', 'Angular2'];
  user2List:any = [];
  user3List:any = [];

  //subscribe mode
  subscribeMode2:boolean=false;
  subscribeMode3:boolean=false;

  methodInterval:boolean=false;

  //subscriptions
  subs2!:Subscription;
  subs3!:Subscription;
  intervalSubs!:Subscription;

  constructor(private du: DesignUtilityService) {}

  ngOnInit(): void {
    this.du.videoEmit.subscribe((res) => {
      console.log('frm subject:', res);
      this.user1List.push(res);
    });
  }

  onVideoAdd(video: any) {
    // console.log(video);
    this.du.videoEmit.next(video);
  }

  user2Subscribe(){
    if(this.subscribeMode2){
      this.subs2.unsubscribe();
    }
    else{
      this.subs2 = this.du.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    }    
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe(){
    if(this.subscribeMode3){
      this.subs3.unsubscribe();
    }
    else{
      this.subs3 = this.du.videoEmit.subscribe(res => {
        this.user3List.push(res);
      });
    }    
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod(){

    const broadcastVideo = interval(2000);
    if(!this.methodInterval){
      this.intervalSubs = broadcastVideo.subscribe((res)=>{
        this.du.videoEmit.next('video' + res);
      });
    }
    else{
      this.intervalSubs.unsubscribe();
    }
    
    this.methodInterval = !this.methodInterval;
  }
}
