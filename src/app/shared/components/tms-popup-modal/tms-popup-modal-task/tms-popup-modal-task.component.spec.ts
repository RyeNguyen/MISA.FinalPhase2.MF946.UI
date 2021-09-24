import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopupModalTaskComponent } from './tms-popup-modal-task.component';

describe('TmsPopupModalTaskComponent', () => {
  let component: TmsPopupModalTaskComponent;
  let fixture: ComponentFixture<TmsPopupModalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopupModalTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopupModalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
