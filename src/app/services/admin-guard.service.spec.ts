import { TestBed } from '@angular/core/testing';

import { AdminGuardService } from './admin-guard.service';

describe('AdminGuardService', () => {
  let service: AdminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGuardService);
  });

  it('should be created', () => {
    const service: AdminGuardService = TestBed.get(AdminGuardService);
    expect(service).toBeTruthy();
  });
});
