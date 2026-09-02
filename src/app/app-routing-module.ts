import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'arquitectura-de-software',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'arquitectura-de-software',
    loadChildren: () => import('./modules/arquitectura-de-software/arquitectura-de-software-module').then(m => m.ArquitecturaDeSoftwareModule)
  },
  {
    path: 'principios-de-arquitectura-de-software',
    loadChildren: () => import('./modules/principios-de-arquitectura-de-software/principios-de-arquitectura-de-software-module').then(m => m.PrincipiosDeArquitecturaDeSoftwareModule)
  },
  {
    path: 'sistema-de-diseno',
    loadChildren: () => import('./modules/sistema-de-diseno/sistema-de-diseno-module').then(m => m.SistemaDeDisenoModule)
  },
  {
    path: 'arquitectura',
    redirectTo: 'arquitectura-de-software',
    pathMatch: 'full'
  },
  {
    path: 'principios',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'diseno',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: '**',
    redirectTo: 'arquitectura-de-software'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
