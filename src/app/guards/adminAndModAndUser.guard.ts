import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AdminAndModAndUserGuard implements CanActivate {

    constructor(private storageService: StorageService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        try{
            const user = this.storageService.getUser();
            const isAdmin = user.roles.includes('ROLE_ADMIN') || user.roles.includes('ROLE_MODERATOR') || user.roles.includes('ROLE_USER');
            
            if (isAdmin) {
                return true;
            } else {
                this.router.navigate(['/forbidden']);
                return false;
            }
        }catch{
            this.router.navigate(['/login']);
            return false;
        }
        
    }
}