import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitSecondpartComponent } from './add-visit-secondpart.component';

describe('AddVisitSecondpartComponent', () => {
  let component: AddVisitSecondpartComponent;
  let fixture: ComponentFixture<AddVisitSecondpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitSecondpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitSecondpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
