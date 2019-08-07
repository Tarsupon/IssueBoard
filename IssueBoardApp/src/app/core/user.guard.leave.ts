import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { MainboardComponent } from '../mainboard';
import { GoogleService } from './googleAuth.service';

@Injectable()
export class UserGuardLeave implements CanDeactivate<MainboardComponent> {

  constructor(private google: GoogleService) {}

  canDeactivate(component: MainboardComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  console.log(route.params);
  console.log(state.url);
  this.google.signOut();
  return  window.confirm("Are you sure?");
}
}
