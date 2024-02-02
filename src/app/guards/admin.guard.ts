import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  let user= JSON.parse(localStorage.getItem('newadmin') || '{}');
  if(!user){
    routes.navigate(['/'])
  }
  return true;
};
