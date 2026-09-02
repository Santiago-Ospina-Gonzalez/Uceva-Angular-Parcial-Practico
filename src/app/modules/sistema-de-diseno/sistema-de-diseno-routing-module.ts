import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSistemaDeDisenoComponent } from './pages/list-sistema-de-diseno/list-sistema-de-diseno';

const routes: Routes = [
  { path: '', component: ListSistemaDeDisenoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaDeDisenoRoutingModule { }
