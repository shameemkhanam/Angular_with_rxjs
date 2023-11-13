import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest-with-latest-from',
  templateUrl: './combine-latest-with-latest-from.component.html',
  styleUrls: ['./combine-latest-with-latest-from.component.scss'],
})
export class CombineLatestWithLatestFromComponent
  implements OnInit, AfterViewInit
{
  namesSource = ['Reema', 'Seema', 'Farah', 'Zainab', 'Babita'];
  colorSource = ['red', 'green', 'lightblue', 'purple', 'yellow'];

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    //observables for select value streams
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    //for getting value instead of map , v can also use pluck as below

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value')
    );

    //Ex 01 combineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name,color,'elContainer');
    });

    // Ex 02 withLatestFrom master-slave strategy
    //any one stream to be chosen as master and another as slave
    //master = nameObs
    //slave = colorObs
    nameObs.pipe(
      withLatestFrom(colorObs)
    ).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name,color,'elContainer2');
    });
  }

  createBox(name: string, color: any, containerId: any) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId)?.appendChild(el);
  }

  ngOnInit(): void {}
}
function createBox(name: void, color: any, containerId: any) {
  throw new Error('Function not implemented.');
}
