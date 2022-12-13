import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthserviceService} from './authservice.service'
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthserviceService,private router:Router){}
 canActivate(
 route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if (!this.authService.isUserLoggedIn()) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        
        this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
        return false;

        //var urlTree = this.router.createUrlTree(['login']);
        //return urlTree;
    } 
   
    return true;

 }
 
}