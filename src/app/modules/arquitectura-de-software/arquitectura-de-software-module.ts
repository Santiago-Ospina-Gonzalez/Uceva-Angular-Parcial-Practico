import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { ArquitecturaDeSoftwareRoutingModule } from './arquitectura-de-software-routing-module';
import { ArquitecturaDeSoftwareComponent } from './arquitectura-de-software';
import { ListArquitecturaDeSoftwareComponent } from './pages/list-arquitectura-de-software/list-arquitectura-de-software';
import { TableArquitecturaDeSoftwareComponent } from './components/table-arquitectura-de-software/table-arquitectura-de-software';


@NgModule({
  declarations: [
    ArquitecturaDeSoftwareComponent,
    ListArquitecturaDeSoftwareComponent,
    TableArquitecturaDeSoftwareComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArquitecturaDeSoftwareRoutingModule
  ]
})
export class ArquitecturaDeSoftwareModule { }
