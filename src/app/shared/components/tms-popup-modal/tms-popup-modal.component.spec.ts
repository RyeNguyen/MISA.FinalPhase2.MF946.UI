import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopupModalComponent } from './tms-popup-modal.component';

describe('TmsPopupModalComponent', () => {
  let component: TmsPopupModalComponent;
  let fixture: ComponentFixture<TmsPopupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
