import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserflightsComponent } from './userflights.component';

describe('UserflightsComponent', () => {
  let component: UserflightsComponent;
  let fixture: ComponentFixture<UserflightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserflightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
