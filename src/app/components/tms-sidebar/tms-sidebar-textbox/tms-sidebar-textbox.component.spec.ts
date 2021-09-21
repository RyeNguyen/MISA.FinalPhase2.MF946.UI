import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsSidebarTextboxComponent } from './tms-sidebar-textbox.component';

describe('TmsSidebarTextboxComponent', () => {
  let component: TmsSidebarTextboxComponent;
  let fixture: ComponentFixture<TmsSidebarTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsSidebarTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsSidebarTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
