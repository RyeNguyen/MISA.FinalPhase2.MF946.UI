import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsTextAreaComponent } from './tms-text-area.component';

describe('TmsTextAreaComponent', () => {
  let component: TmsTextAreaComponent;
  let fixture: ComponentFixture<TmsTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
