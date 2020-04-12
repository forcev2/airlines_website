import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUsersComponent } from './flight-users.component';

describe('FlightUsersComponent', () => {
  let component: FlightUsersComponent;
  let fixture: ComponentFixture<FlightUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
