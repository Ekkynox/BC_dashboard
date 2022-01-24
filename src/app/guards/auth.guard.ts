import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public monService: AuthService;

  constructor(bool: AuthService) {
    this.monService = bool;
  }

  canActivate(): boolean {

    return this.monService.isConnected;
  }

}
