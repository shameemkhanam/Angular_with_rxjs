import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  randomNames = ['seema', 'jyothi', 'amrita', 'anjana', 'ankita'];

  constructor(private du: DesignUtilityService) {}

  ngOnInit(): void {
    const namesource = from(this.randomNames);

    //Ex 01 take
    namesource.pipe(take(3)).subscribe((res) => {
      // console.log(res);
      this.du.print(res, 'elContainer');
    });

    //Ex 02 takeLast
    namesource.pipe(takeLast(3)).subscribe((res) => {
      // console.log(res);
      this.du.print(res, 'elContainer2');
    });

    //Ex 03 takeUntil
    let condition1 = timer(5000);
    let condition2 = fromEvent(document,'click');
    
    const source = interval(1000).pipe(
      map(d => 'Number '+d),
      // takeUntil(condition1)
      takeUntil(condition2)
      );
    source.subscribe((res) => {
      console.log(res);
      this.du.print(res, 'elContainer3');
    });
  }
}
