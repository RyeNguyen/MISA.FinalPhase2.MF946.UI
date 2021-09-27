import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopupModalProjectComponent } from './tms-popup-modal-project.component';

describe('TmsPopupModalProjectComponent', () => {
  let component: TmsPopupModalProjectComponent;
  let fixture: ComponentFixture<TmsPopupModalProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopupModalProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopupModalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
