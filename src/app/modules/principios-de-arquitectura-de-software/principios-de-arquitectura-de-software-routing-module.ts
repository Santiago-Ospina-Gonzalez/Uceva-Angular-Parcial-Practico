import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrincipiosDeArquitecturaDeSoftwareComponent } from './pages/list-principios-de-arquitectura-de-software/list-principios-de-arquitectura-de-software';

const routes: Routes = [
  { path: '', component: ListPrincipiosDeArquitecturaDeSoftwareComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosDeArquitecturaDeSoftwareRoutingModule { }
