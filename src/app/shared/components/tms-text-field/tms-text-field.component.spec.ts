import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsTextFieldComponent } from './tms-text-field.component';

describe('TmsTextFieldComponent', () => {
  let component: TmsTextFieldComponent;
  let fixture: ComponentFixture<TmsTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
