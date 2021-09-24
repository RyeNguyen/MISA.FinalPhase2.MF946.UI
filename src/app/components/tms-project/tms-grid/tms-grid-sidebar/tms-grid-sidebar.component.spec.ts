import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsGridSidebarComponent } from './tms-grid-sidebar.component';

describe('TmsGridSidebarComponent', () => {
  let component: TmsGridSidebarComponent;
  let fixture: ComponentFixture<TmsGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsGridSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
