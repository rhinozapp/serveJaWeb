import { Injectable } from '@angular/core';
import {Place} from "../../models/place";
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {ApiServiceService} from "../api-service/api-service.service";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {HelpersService} from "../helpers/helpers.service";
import {CanActivate, Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {throwError} from "rxjs/internal/observable/throwError";
import {NgxPermissionsService} from "ngx-permissions";

const PERMISSION_PLACE = ['PLACE'];
const PERMISSION_WAITER = ['WAITER'];

@Injectable()
export class AuthService {
    constructor(private _apiService : ApiServiceService,
                private _http : HttpClient,
                private _helpers : HelpersService,
                private _jwtHelperService : JwtHelperService,
                private _router: Router,
                private _permissionsService : NgxPermissionsService) { }

    doLogin(email, password){
        return this._http
            .post(this._apiService.url + 'web/doLogin', {email, password})
            .pipe(
                tap((data : any) => {
                    data.status ?
                        this.setSession(data, PERMISSION_PLACE) :
                        throwError(this._helpers.openSnackBar(data.message, 'OK'));
                }),
                catchError(() : any => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'))
            );
    }

    doSignUp(place : Place){
        return this._http
            .post(this._apiService.url + 'web/doSignUp', {place})
            .pipe(
                tap((data : any) => {
                    data.status ?
                        this.setSession(data, PERMISSION_PLACE) :
                        throwError(this._helpers.openSnackBar(data.message, 'OK'));
                }),
                catchError(() : any => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'))
            );
    }

    doLoginWaiter(username, password){
        return this._http
            .post(this._apiService.url + 'web/doLoginWaiter', {username, password})
            .pipe(
                tap((data : any) => {
                    !data.status ?
                        throwError(this._helpers.openSnackBar(data.message, 'OK')) :
                        data.status && !data.resetPassword ?
                            this.setSession(data, PERMISSION_WAITER) :
                            this._helpers.openSnackBar(data.message, 'OK');
                }),
                catchError(() : any => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'))
            );
    }

    changePasswordWaiter(username, password){
        return this._http
            .post(this._apiService.url + 'web/changePasswordAndDoLoginWaiter', {username, password})
            .pipe(
                tap((data : any) => {
                    data.status ?
                        this.setSession(data, PERMISSION_WAITER) :
                        throwError(this._helpers.openSnackBar(data.message, 'OK'));
                }),
                catchError(() : any => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'))
            );
    }

    recoveryPassword(email){
        return this._http.post(this._apiService.url + 'web/recoveryPasswordSend', {email});
    }

    setSession(authResult, permission) : void{
        this._permissionsService.addPermission(permission);
        localStorage.setItem('token', authResult.token);
        localStorage.setItem('permission', JSON.stringify(permission));
        this._router.navigate(['/dashboard']);
    }

    loggedIn(){
        return !this._jwtHelperService.isTokenExpired(localStorage.getItem('token'));
    }

    decodeProfile(){
        return this._jwtHelperService.decodeToken(localStorage.getItem('token'));
    }

    logout(){
        this._permissionsService.flushPermissions();
        localStorage.removeItem('token');
        this._router.navigate(['/']);
    }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        return localStorage.getItem('token') ?

            next.handle(req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            })) :

            next.handle(req);
    }
}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _auth: AuthService,
                private _permissionService : NgxPermissionsService) {}

    canActivate() {
        localStorage.getItem('permission') ?
            this._permissionService.loadPermissions(JSON.parse(localStorage.getItem('permission'))) : false;
        return this._auth.loggedIn() ? true : (this._auth.logout(), false);
    }
}
