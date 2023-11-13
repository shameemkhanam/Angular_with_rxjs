import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss'],
})
export class SwitchMap2Component implements AfterViewInit {
  searchResults:any;
  searchResultCount!:number;
  @ViewChild('searchForm') searchForm!: NgForm;

  constructor(private srchService:SearchService){}

  ngAfterViewInit(): void {
    
    this.srchService.getSearches('rxjs').subscribe((res)=>{
      // console.log(res);      
    });
    
    const formValue = this.searchForm.valueChanges;

    formValue
      ?.pipe(
        // map(data => data.searchTerm)
        // filter(()=>this.searchForm.valid),
        pluck('searchTerm'),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(data => this.srchService.getSearches(data))
      )
      .subscribe((res) => {
        console.log(res);
        this.searchResults = res;
        // console.log(Object.keys(res).length);
        this.searchResultCount = Object.keys(res).length
        
      });
  }
}
