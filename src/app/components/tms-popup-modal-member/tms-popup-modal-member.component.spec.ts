import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopupModalMemberComponent } from './tms-popup-modal-member.component';

describe('TmsPopupModalMemberComponent', () => {
  let component: TmsPopupModalMemberComponent;
  let fixture: ComponentFixture<TmsPopupModalMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopupModalMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopupModalMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
