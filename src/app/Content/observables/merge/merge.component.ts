import { Component, OnInit } from '@angular/core';
import { interval, map, take, merge } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  constructor(private du: DesignUtilityService) {}

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(
      map((v) => 'Tech Video #' + (v + 1)),
      take(5)
    );
    const sourceComedy = interval(6000).pipe(
      map((v) => 'Comedy Video #' + (v + 1)),
      take(3)
    );
    const sourceNews = interval(3500).pipe(
      map((v) => 'News Video #' + (v + 1)),
      take(4)
    );

    const finalObs = merge(sourceTech, sourceComedy, sourceNews);

    finalObs.subscribe((res) => {
      console.log(res);
      this.du.print(res, 'elContainer');
    });
  }
}
