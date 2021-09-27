import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsChartDoughnutComponent } from './tms-chart-doughnut.component';

describe('TmsChartDoughnutComponent', () => {
  let component: TmsChartDoughnutComponent;
  let fixture: ComponentFixture<TmsChartDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsChartDoughnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsChartDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
