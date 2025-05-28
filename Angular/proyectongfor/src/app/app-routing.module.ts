import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: 'listadoproductos',
    component: ListadoproductosComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
