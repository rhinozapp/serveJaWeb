import { Injectable } from '@angular/core';
import {Place} from "../../models/place";
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {ApiServiceService} from "../api-service/api-service.service";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {HelpersService} from "../helpers/helpers.service";

@Injectable()
export class AuthService {
    constructor(private _apiService : ApiServiceService,
                private _http : HttpClient,
                private _helpers : HelpersService) { }

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

    setSession(authResult){
        localStorage.setItem('token', authResult.token)
    }

    logout(){
        localStorage.removeItem('token');
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
