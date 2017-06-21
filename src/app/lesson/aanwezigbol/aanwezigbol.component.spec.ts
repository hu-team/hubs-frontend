import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanwezigbolComponent } from './aanwezigbol.component';

describe('AanwezigbolComponent', () => {
  let component: AanwezigbolComponent;
  let fixture: ComponentFixture<AanwezigbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanwezigbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanwezigbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
