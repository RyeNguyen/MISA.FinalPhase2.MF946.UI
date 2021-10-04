import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopoverUserComponent } from './tms-popover-user.component';

describe('TmsPopoverUserComponent', () => {
  let component: TmsPopoverUserComponent;
  let fixture: ComponentFixture<TmsPopoverUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopoverUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopoverUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
