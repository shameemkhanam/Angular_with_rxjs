import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, pluck, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrls: ['./zip-fork-join.component.scss']
})
export class ZipForkJoinComponent implements AfterViewInit{
  namesSource = ['Reema', 'Seema', 'Farah', 'Zainab', 'Babita'];
  colorSource = ['red', 'green', 'lightblue', 'purple', 'yellow'];

  @ViewChild('name')name!:ElementRef;
  @ViewChild('color')color!:ElementRef;

  ngAfterViewInit(): void {
    const nameObs = fromEvent(this.name.nativeElement,'change')
    .pipe(
      pluck('target','value'),
      take(2)
    );

    const colorObs = fromEvent(this.color.nativeElement,'change')
    .pipe(
      pluck('target','value'),
      take(3)
    );

    //zip
    zip(nameObs,colorObs).subscribe(([name,color])=>{
      console.log(name,color);
      this.createBox(name,color,'elContainer');
    })

    //forkJoin
    forkJoin(nameObs,colorObs).subscribe(([name,color])=>{
      console.log(name,color);
      this.createBox(name,color,'elContainer2');
    })

  }

  createBox(name: any,color: any,containerId: any){
    let el = document.createElement('div');
    el.innerText=name;
    el.setAttribute('class',color);
    document.getElementById(containerId)?.appendChild(el);
  }

}
