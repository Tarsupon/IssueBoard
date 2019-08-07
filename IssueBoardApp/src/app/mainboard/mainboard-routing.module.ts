import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainboardComponent } from './mainboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainboardRoutingModule {}
