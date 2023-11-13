import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './Content/promise/promise.component';
import { ObservablesComponent } from './Content/observables/observables.component';
import { AllComponent } from './Content/observables/all/all.component';
import { FromEventComponent } from './Content/observables/from-event/from-event.component';
import { IntervalComponent } from './Content/observables/interval/interval.component';
import { OfFromComponent } from './Content/observables/of-from/of-from.component';
import { ToArrayComponent } from './Content/observables/to-array/to-array.component';
import { CustomObservableComponent } from './Content/observables/custom-observable/custom-observable.component';
import { MapComponent } from './Content/observables/map/map.component';
import { PluckComponent } from './Content/observables/pluck/pluck.component';
import { FilterComponent } from './Content/observables/filter/filter.component';
import { TapComponent } from './Content/observables/tap/tap.component';
import { TakeComponent } from './Content/observables/take/take.component';
import { RetryComponent } from './Content/observables/retry/retry.component';
import { DebounceTimeDistinctUCComponent } from './Content/observables/debounce-time-distinct-uc/debounce-time-distinct-uc.component';
import { SubjectComponent } from './Content/subject/subject/subject.component';
import { SubjectListComponent } from './Content/subject/subject-list/subject-list.component';
import { SubjectAndBehviorSubjectComponent } from './Content/subject/subject-and-behvior-subject/subject-and-behvior-subject.component';
import { ReplaySubjectComponent } from './Content/subject/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Content/subject/async-subject/async-subject.component';
import { ConcatComponent } from './Content/observables/concat/concat.component';
import { MergeComponent } from './Content/observables/merge/merge.component';
import { MergeMapComponent } from './Content/observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './Content/observables/concat-map/concat-map.component';
import { ConcatMapMobileNotificationComponent } from './Content/observables/concat-map-mobile-notification/concat-map-mobile-notification.component';
import { SwitchMapComponent } from './Content/observables/switch-map/switch-map.component';
import { SwitchMap2Component } from './Content/observables/switch-map2/switch-map2.component';
import { ExhaustMapComponent } from './Content/observables/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './Content/observables/share-replay/share-replay.component';
import { CombineLatestWithLatestFromComponent } from './Content/observables/combine-latest-with-latest-from/combine-latest-with-latest-from.component';
import { ZipForkJoinComponent } from './Content/observables/zip-fork-join/zip-fork-join.component';
import { CatchErrorThrowErrorComponent } from './Content/observables/catch-error-throw-error/catch-error-throw-error.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'promise',
    pathMatch:'full'
  },
  {
    path:"promise",
    component:PromiseComponent
  },
  {
    path:'observables',
    component:ObservablesComponent,
    children:[
      { path:'',component:AllComponent },
      { path:'fromEvent',component:FromEventComponent },
      { path:'interval', component:IntervalComponent },
      { path:'of-from', component:OfFromComponent},
      { path:'toArray', component:ToArrayComponent},
      { path:'customObservable', component:CustomObservableComponent},
      { path:'map', component:MapComponent},
      { path:'pluck', component:PluckComponent},
      { path:'filter', component:FilterComponent},
      { path:'tap', component:TapComponent},
      { path:'take', component:TakeComponent},
      { path:'retry', component:RetryComponent},
      { path:'debounceTime', component:DebounceTimeDistinctUCComponent},
      { path:'concat', component:ConcatComponent},
      { path:'merge', component:MergeComponent},
      { path:'mergeMap', component:MergeMapComponent},
      { path:'concatMap', component:ConcatMapComponent},
      { path:'concatMap/MobileNotification', component:ConcatMapMobileNotificationComponent},
      { path:'switchMap', component:SwitchMapComponent},
      { path:'switchMap/SearchFunctionality', component:SwitchMap2Component},
      { path:'exhaustMap', component:ExhaustMapComponent},
      { path:'shareReplay', component:ShareReplayComponent},
      { path:'combineLatest_withLatestFrom', component:CombineLatestWithLatestFromComponent},
      { path:'zip_forkJoin', component:ZipForkJoinComponent},
      { path:'catchError_throwError', component:CatchErrorThrowErrorComponent}
    ]
  },
  {
    path:'subject',
    component:SubjectComponent,
    children:[
      { path:'', component:SubjectListComponent},
      { path: 'subjectAndBehviorSubject', component:SubjectAndBehviorSubjectComponent},
      { path: 'replaySubject', component:ReplaySubjectComponent},
      { path: 'asyncSubject', component:AsyncSubjectComponent}
    ]
  },
  {
    path:"**",
    redirectTo:'promise',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
