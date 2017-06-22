import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNotificationComponent } from './mini-notification.component';

describe('MiniNotificationComponent', () => {
  let component: MiniNotificationComponent;
  let fixture: ComponentFixture<MiniNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
