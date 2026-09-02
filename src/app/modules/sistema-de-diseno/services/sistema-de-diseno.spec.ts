import { TestBed } from '@angular/core/testing';

import { SistemaDeDiseno } from './sistema-de-diseno';

describe('SistemaDeDiseno', () => {
  let service: SistemaDeDiseno;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemaDeDiseno);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
