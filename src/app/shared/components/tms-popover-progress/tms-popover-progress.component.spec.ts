import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsPopoverProgressComponent } from './tms-popover-progress.component';

describe('TmsPopoverProgressComponent', () => {
  let component: TmsPopoverProgressComponent;
  let fixture: ComponentFixture<TmsPopoverProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsPopoverProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsPopoverProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
