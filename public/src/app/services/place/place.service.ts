import { Injectable } from '@angular/core';
import {ApiServiceService} from "../api-service/api-service.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PlaceService {
    constructor(private _apiService : ApiServiceService,
                private _http : HttpClient) {}

    doLogin(email, password){
        return this._http
            .post(this._apiService.url + 'web/doLogin', {email, password});
    }

    doSignUp(){
        return this._http
            .post(this._apiService.url + 'web/doSignUp', {});
    }
}
