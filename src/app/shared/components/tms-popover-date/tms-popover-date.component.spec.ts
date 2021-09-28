import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopoverDateComponent } from './tms-popover-date.component';

describe('TmsPopoverDateComponent', () => {
  let component: TmsPopoverDateComponent;
  let fixture: ComponentFixture<TmsPopoverDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopoverDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopoverDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
