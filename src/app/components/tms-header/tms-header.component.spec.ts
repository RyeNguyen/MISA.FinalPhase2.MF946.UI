import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsHeaderComponent } from './tms-header.component';

describe('TmsHeaderComponent', () => {
  let component: TmsHeaderComponent;
  let fixture: ComponentFixture<TmsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
