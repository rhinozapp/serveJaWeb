import { Injectable } from '@angular/core';
import {ApiServiceService} from "../api-service/api-service.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class WaiterService {
    constructor(private _apiService : ApiServiceService,
              private _http : HttpClient) {}

    getListWaiter(place){
        return this._http.post(this._apiService.url + 'web/getListWaiter', place);
    }

    saveWaiter(waiter, place){
        return this._http.post(this._apiService.url + 'web/saveWaiter', {
            waiter, place
        });
    }

    usernameValidation(waiter){
        return this._http.post(this._apiService.url + 'web/usernameValidation', waiter);
    }

    resetPassword(waiter){
        return this._http.post(this._apiService.url + 'web/resetPassword', waiter);
    }

    deleteWaiter(waiter){
        return this._http.post(this._apiService.url + 'web/deleteWaiter', waiter);
    }
}
