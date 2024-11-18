import { TestBed } from '@angular/core/testing';

import { StudentsRecordServiceService } from './students-record-service.service';

describe('StudentsRecordServiceService', () => {
  let service: StudentsRecordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsRecordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
