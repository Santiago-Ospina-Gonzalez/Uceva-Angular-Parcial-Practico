import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArquitecturaDeSoftwareComponent } from './pages/list-arquitectura-de-software/list-arquitectura-de-software';

const routes: Routes = [
  { path: '', component: ListArquitecturaDeSoftwareComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquitecturaDeSoftwareRoutingModule { }
