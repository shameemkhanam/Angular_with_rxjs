import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
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
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeDistinctUCComponent } from './Content/observables/debounce-time-distinct-uc/debounce-time-distinct-uc.component';
import { SubjectComponent } from './Content/subject/subject/subject.component';
import { SubjectListComponent } from './Content/subject/subject-list/subject-list.component';
import { SubjectAndBehviorSubjectComponent } from './Content/subject/subject-and-behvior-subject/subject-and-behvior-subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaySubjectComponent } from './Content/subject/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Content/subject/async-subject/async-subject.component';
import { ConcatComponent } from './Content/observables/concat/concat.component';
import { MergeComponent } from './Content/observables/merge/merge.component';
import { MergeMapComponent } from './Content/observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './Content/observables/concat-map/concat-map.component';
import { ConcatMapMobileNotificationComponent } from './Content/observables/concat-map-mobile-notification/concat-map-mobile-notification.component';
import { SwitchMapComponent } from './Content/observables/switch-map/switch-map.component';
import { SwitchMap2Component } from './Content/observables/switch-map2/switch-map2.component'
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './Content/observables/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './Content/observables/share-replay/share-replay.component';
import { CombineLatestWithLatestFromComponent } from './Content/observables/combine-latest-with-latest-from/combine-latest-with-latest-from.component';
import { ZipForkJoinComponent } from './Content/observables/zip-fork-join/zip-fork-join.component';
import { CatchErrorThrowErrorComponent } from './Content/observables/catch-error-throw-error/catch-error-throw-error.component';
import { Comp4Component } from './comps/comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeDistinctUCComponent,
    SubjectComponent,
    SubjectListComponent,
    SubjectAndBehviorSubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMapMobileNotificationComponent,
    SwitchMapComponent,
    SwitchMap2Component,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestWithLatestFromComponent,
    ZipForkJoinComponent,
    CatchErrorThrowErrorComponent,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
