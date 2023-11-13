import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestWithLatestFromComponent } from './combine-latest-with-latest-from.component';

describe('CombineLatestWithLatestFromComponent', () => {
  let component: CombineLatestWithLatestFromComponent;
  let fixture: ComponentFixture<CombineLatestWithLatestFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestWithLatestFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestWithLatestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
