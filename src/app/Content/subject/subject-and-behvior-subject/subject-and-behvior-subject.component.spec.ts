import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndBehviorSubjectComponent } from './subject-and-behvior-subject.component';

describe('SubjectAndBehviorSubjectComponent', () => {
  let component: SubjectAndBehviorSubjectComponent;
  let fixture: ComponentFixture<SubjectAndBehviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAndBehviorSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAndBehviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
