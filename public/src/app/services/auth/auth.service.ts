import { Injectable } from '@angular/core';
import {Place} from "../../models/place";
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {ApiServiceService} from "../api-service/api-service.service";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {HelpersService} from "../helpers/helpers.service";
import {CanActivate, Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
    constructor(private _apiService : ApiServiceService,
                private _http : HttpClient,
                private _helpers : HelpersService,
                private _jwtHelperService : JwtHelperService,
                private _router: Router) { }

    doLogin(email, password){
        return this._http
            .post(this._apiService.url + 'web/doLogin', {email, password})
            .pipe(
                tap(req => this.setSession(req)),
                catchError(() : any => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'))
            );
    }

    doSignUp(place : Place){
        return this._http
            .post(this._apiService.url + 'web/doSignUp', {place})
            .pipe(
                tap(req => this.setSession(req)),
                catchError(() : any => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'))
            );
    }

    setSession(authResult) : void{
        localStorage.setItem('token', authResult.token);
        this._router.navigate(['/profile']);
    }

    loggedIn(){
        return !this._jwtHelperService.isTokenExpired(localStorage.getItem('token'));
    }

    decodeProfile(){
        return this._jwtHelperService.decodeToken(localStorage.getItem('token'));
    }

    logout(){
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
                private _router: Router) {}

    canActivate() {
        return this._auth.loggedIn() ? true : (this._auth.logout(), false);
    }
}
