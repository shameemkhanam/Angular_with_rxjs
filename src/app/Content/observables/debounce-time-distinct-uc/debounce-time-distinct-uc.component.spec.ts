import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeDistinctUCComponent } from './debounce-time-distinct-uc.component';

describe('DebounceTimeDistinctUCComponent', () => {
  let component: DebounceTimeDistinctUCComponent;
  let fixture: ComponentFixture<DebounceTimeDistinctUCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTimeDistinctUCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTimeDistinctUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
