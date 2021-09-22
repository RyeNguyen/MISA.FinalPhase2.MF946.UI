import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsButtonComponent } from './tms-button.component';

describe('TmsButtonComponent', () => {
  let component: TmsButtonComponent;
  let fixture: ComponentFixture<TmsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
