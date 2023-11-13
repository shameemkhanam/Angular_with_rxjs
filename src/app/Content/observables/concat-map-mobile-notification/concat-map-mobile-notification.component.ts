import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-concat-map-mobile-notification',
  templateUrl: './concat-map-mobile-notification.component.html',
  styleUrls: ['./concat-map-mobile-notification.component.scss']
})
export class ConcatMapMobileNotificationComponent implements OnInit{

  notifyData=[
    {name:'James', p:'the facebook notification.'},
    {name:'Reeta', p:'the twitter notification.'},
    {name:'Meena', p:'the google notification.'},
    {name:'Rohit', p:'the instagram notification.'}
  ];

  constructor(private du:DesignUtilityService){}

  ngOnInit(): void {
    from(this.notifyData).pipe(concatMap(res => this.getHtml(res))).subscribe((res: any)=>{
      console.log(res);
      this.du.print2(res,'elContainer');
    });
    
  }

  getHtml(data:any){
    return of(`<strong >${data.name}</strong>
    <p style="font-weight:normal;">${data.p}</p>`).pipe(delay(2000));
  }

}
