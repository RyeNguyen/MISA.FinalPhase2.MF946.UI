import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsSelectBoxComponent } from './tms-select-box.component';

describe('TmsSelectBoxComponent', () => {
  let component: TmsSelectBoxComponent;
  let fixture: ComponentFixture<TmsSelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsSelectBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
