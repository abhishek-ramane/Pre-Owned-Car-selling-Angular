import { TestBed, inject } from '@angular/core/testing';

import { OwnerRegisterService } from './owner-register.service';

describe('OwnerRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerRegisterService]
    });
  });

  it('should be created', inject([OwnerRegisterService], (service: OwnerRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
