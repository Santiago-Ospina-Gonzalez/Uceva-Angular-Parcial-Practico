import { TestBed } from '@angular/core/testing';

import { ArquitecturaDeSoftware } from './arquitectura-de-software';

describe('ArquitecturaDeSoftware', () => {
  let service: ArquitecturaDeSoftware;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquitecturaDeSoftware);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
