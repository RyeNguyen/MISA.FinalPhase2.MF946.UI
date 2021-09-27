import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsDateBoxComponent } from './tms-date-box.component';

describe('TmsDateBoxComponent', () => {
  let component: TmsDateBoxComponent;
  let fixture: ComponentFixture<TmsDateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsDateBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsDateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
