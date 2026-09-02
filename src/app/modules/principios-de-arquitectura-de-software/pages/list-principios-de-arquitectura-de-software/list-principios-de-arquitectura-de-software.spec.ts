import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrincipiosDeArquitecturaDeSoftwareComponent } from './list-principios-de-arquitectura-de-software';

describe('ListPrincipiosDeArquitecturaDeSoftwareComponent', () => {
  let component: ListPrincipiosDeArquitecturaDeSoftwareComponent;
  let fixture: ComponentFixture<ListPrincipiosDeArquitecturaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPrincipiosDeArquitecturaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrincipiosDeArquitecturaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
