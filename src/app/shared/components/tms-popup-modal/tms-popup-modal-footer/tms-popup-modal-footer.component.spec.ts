import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopupModalFooterComponent } from './tms-popup-modal-footer.component';

describe('TmsPopupModalFooterComponent', () => {
  let component: TmsPopupModalFooterComponent;
  let fixture: ComponentFixture<TmsPopupModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopupModalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopupModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
