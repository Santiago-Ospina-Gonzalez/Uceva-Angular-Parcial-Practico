import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { PrincipiosDeArquitecturaDeSoftwareRoutingModule } from './principios-de-arquitectura-de-software-routing-module';
import { PrincipiosDeArquitecturaDeSoftwareComponent } from './principios-de-arquitectura-de-software';
import { ListPrincipiosDeArquitecturaDeSoftwareComponent } from './pages/list-principios-de-arquitectura-de-software/list-principios-de-arquitectura-de-software';
import { TablePrincipiosDeArquitecturaDeSoftwareComponent } from './components/table-principios-de-arquitectura-de-software/table-principios-de-arquitectura-de-software';


@NgModule({
  declarations: [
    PrincipiosDeArquitecturaDeSoftwareComponent,
    ListPrincipiosDeArquitecturaDeSoftwareComponent,
    TablePrincipiosDeArquitecturaDeSoftwareComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrincipiosDeArquitecturaDeSoftwareRoutingModule
  ]
})
export class PrincipiosDeArquitecturaDeSoftwareModule { }
