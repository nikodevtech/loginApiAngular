import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './core/bienvenida/bienvenida.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  { path: 'usuarios/login', loadChildren: () => import('./vistas/login/login.module').then(m => m.LoginModule) },
  { path: 'usuarios/registro', loadChildren: () => import('./vistas/registro/registro.module').then(m => m.RegistroModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
