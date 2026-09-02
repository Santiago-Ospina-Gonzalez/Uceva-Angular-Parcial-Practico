import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { SistemaDeDisenoRoutingModule } from './sistema-de-diseno-routing-module';
import { SistemaDeDisenoComponent } from './sistema-de-diseno';
import { ListSistemaDeDisenoComponent } from './pages/list-sistema-de-diseno/list-sistema-de-diseno';
import { TableSistemaDeDisenoComponent } from './components/table-sistema-de-diseno/table-sistema-de-diseno';


@NgModule({
  declarations: [
    SistemaDeDisenoComponent,
    ListSistemaDeDisenoComponent,
    TableSistemaDeDisenoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SistemaDeDisenoRoutingModule
  ]
})
export class SistemaDeDisenoModule { }
