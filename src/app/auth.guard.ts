import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = new Router();
  const userId = localStorage.getItem('userId');
  if (userId) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
