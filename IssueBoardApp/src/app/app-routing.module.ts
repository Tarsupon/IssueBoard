import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'kanban',
    loadChildren: () => import('./mainboard/mainboard.module').then(m => m.MainboardModule),
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
