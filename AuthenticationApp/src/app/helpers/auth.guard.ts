import {AuthenticationService} from './../services/authentication.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.getUser();
    if (user) {
      if (route.data['roles'] && route.data['roles'].indexOf(user.roles) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
