import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsProjectComponent } from './tms-project.component';

describe('TmsProjectComponent', () => {
  let component: TmsProjectComponent;
  let fixture: ComponentFixture<TmsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
