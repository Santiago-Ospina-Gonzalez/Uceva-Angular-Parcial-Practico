import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosDeArquitecturaDeSoftwareComponent } from './principios-de-arquitectura-de-software';

describe('PrincipiosDeArquitecturaDeSoftwareComponent', () => {
  let component: PrincipiosDeArquitecturaDeSoftwareComponent;
  let fixture: ComponentFixture<PrincipiosDeArquitecturaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipiosDeArquitecturaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipiosDeArquitecturaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
