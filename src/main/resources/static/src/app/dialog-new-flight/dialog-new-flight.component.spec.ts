import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewFlightComponent } from './dialog-new-flight.component';

describe('DialogNewFlightComponent', () => {
  let component: DialogNewFlightComponent;
  let fixture: ComponentFixture<DialogNewFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
