import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrincipiosDeArquitecturaDeSoftwareComponent } from './table-principios-de-arquitectura-de-software';

describe('TablePrincipiosDeArquitecturaDeSoftwareComponent', () => {
  let component: TablePrincipiosDeArquitecturaDeSoftwareComponent;
  let fixture: ComponentFixture<TablePrincipiosDeArquitecturaDeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePrincipiosDeArquitecturaDeSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePrincipiosDeArquitecturaDeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
