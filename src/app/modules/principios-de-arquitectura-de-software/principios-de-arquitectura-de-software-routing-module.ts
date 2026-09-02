import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrincipiosDeArquitecturaDeSoftwareComponent } from './pages/list-principios-de-arquitectura-de-software/list-principios-de-arquitectura-de-software';

const routes: Routes = [
  { path: 'list-principios-de-arquitectura-de-software', component: ListPrincipiosDeArquitecturaDeSoftwareComponent },
  { path: '**', redirectTo: 'list-principios-de-arquitectura-de-software' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosDeArquitecturaDeSoftwareRoutingModule { }
