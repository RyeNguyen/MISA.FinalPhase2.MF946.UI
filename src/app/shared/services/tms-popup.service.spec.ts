import { TestBed } from '@angular/core/testing';

import { TmsPopupService } from './tms-popup.service';

describe('TmsPopupService', () => {
  let service: TmsPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmsPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
