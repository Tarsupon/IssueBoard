import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core';
import { UserGuardLeave } from './core';

const routes: Routes = [
  {
    path: 'kanban',
    loadChildren: () => import('./mainboard/mainboard.module').then(m => m.MainboardModule),
    canActivate: [AuthGuard],
    canDeactivate: [UserGuardLeave]
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
