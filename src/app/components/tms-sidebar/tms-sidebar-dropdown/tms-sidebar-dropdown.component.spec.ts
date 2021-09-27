import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsSidebarDropdownComponent } from './tms-sidebar-dropdown.component';

describe('TmsSidebarDropdownComponent', () => {
  let component: TmsSidebarDropdownComponent;
  let fixture: ComponentFixture<TmsSidebarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsSidebarDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsSidebarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
