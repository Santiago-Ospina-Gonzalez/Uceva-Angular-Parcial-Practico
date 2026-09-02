import { TestBed } from '@angular/core/testing';

import { PrincipiosDeArquitecturaDeSoftware } from './principios-de-arquitectura-de-software';

describe('PrincipiosDeArquitecturaDeSoftware', () => {
  let service: PrincipiosDeArquitecturaDeSoftware;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosDeArquitecturaDeSoftware);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
