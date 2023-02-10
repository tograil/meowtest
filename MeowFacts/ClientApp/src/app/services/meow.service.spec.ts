import { TestBed } from '@angular/core/testing';

import { MeowService } from './meow.service';

describe('MeowService', () => {
  let service: MeowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
