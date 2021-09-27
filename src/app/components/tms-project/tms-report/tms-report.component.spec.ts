import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsReportComponent } from './tms-report.component';

describe('TmsReportComponent', () => {
  let component: TmsReportComponent;
  let fixture: ComponentFixture<TmsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
