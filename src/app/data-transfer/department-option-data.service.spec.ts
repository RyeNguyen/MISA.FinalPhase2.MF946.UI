import { TestBed } from '@angular/core/testing';

import { DepartmentOptionDataService } from './department-option-data.service';

describe('DepartmentOptionDataService', () => {
  let service: DepartmentOptionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentOptionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
