import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List_FlightComponent } from './list_flight.component';

describe('List_FlightComponent', () => {
  let component: List_FlightComponent;
  let fixture: ComponentFixture<List_FlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List_FlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List_FlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
