import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopupModalDepartmentComponent } from './tms-popup-modal-department.component';

describe('TmsPopupModalDepartmentComponent', () => {
  let component: TmsPopupModalDepartmentComponent;
  let fixture: ComponentFixture<TmsPopupModalDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopupModalDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopupModalDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
