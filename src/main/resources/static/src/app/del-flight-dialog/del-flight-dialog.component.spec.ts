import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelFlightDialogComponent } from './del-flight-dialog.component';

describe('DelFlightDialogComponent', () => {
  let component: DelFlightDialogComponent;
  let fixture: ComponentFixture<DelFlightDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelFlightDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelFlightDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
