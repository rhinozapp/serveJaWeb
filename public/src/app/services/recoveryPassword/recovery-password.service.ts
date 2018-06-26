import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiServiceService} from "../api-service/api-service.service";

@Injectable()
export class RecoveryPasswordService {
    constructor(private _http : HttpClient,
                private _apiService : ApiServiceService) {}

    recoveryPasswordGetHash(hashRecovery){
        return this._http.post(this._apiService.url + 'web/recoveryPasswordGetHash', {hashRecovery});
    }

    recoveryPassword(data){
        return this._http.post(this._apiService.url + 'web/recoveryPassword', data);
    }
}
