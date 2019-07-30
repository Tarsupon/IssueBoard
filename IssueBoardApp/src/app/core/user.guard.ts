import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { UserAuth } from './user.auth';

export class AuthGuard implements CanActivate{

  constructor(private auth: UserAuth) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    if (this.auth.authentificate()) {
      return true;
    }

  }
}
