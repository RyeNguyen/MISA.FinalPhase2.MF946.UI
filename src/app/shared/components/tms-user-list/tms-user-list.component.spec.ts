import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsUserListComponent } from './tms-user-list.component';

describe('TmsUserListComponent', () => {
  let component: TmsUserListComponent;
  let fixture: ComponentFixture<TmsUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
