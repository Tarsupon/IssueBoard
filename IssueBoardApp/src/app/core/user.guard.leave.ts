import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainboardComponent } from '../mainboard';

@Injectable()
export class UserGuardLeave implements CanDeactivate<MainboardComponent> {
  canDeactivate(component: MainboardComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  console.log("UnsearchedTermGuard");
  console.log(route.params);
  console.log(state.url);
  return  window.confirm("Are you sure?");
}
}
