import { TestBed, inject } from '@angular/core/testing';

import { AddcarService } from './addcar.service';

describe('AddcarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcarService]
    });
  });

  it('should be created', inject([AddcarService], (service: AddcarService) => {
    expect(service).toBeTruthy();
  }));
});
