import { CanActivateFn, Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({   // <-- This is important
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private service: CustomerService, private router: Router) { }

  canActivate(): boolean {
    if (this.service.getUserLoggedStatus()) {
      return true;
    }
    else {
      this.router.navigate(["login"])
      return false;
    }
  }
}
