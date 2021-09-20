import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsDashboardComponent } from './tms-dashboard.component';

describe('TmsDashboardComponent', () => {
  let component: TmsDashboardComponent;
  let fixture: ComponentFixture<TmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
