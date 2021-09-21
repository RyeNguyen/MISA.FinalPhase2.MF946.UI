import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsSidebarComponent } from './tms-sidebar.component';

describe('TmsSidebarComponent', () => {
  let component: TmsSidebarComponent;
  let fixture: ComponentFixture<TmsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
