import { Injectable } from '@angular/core';
import {ApiServiceService} from "../api-service/api-service.service";
import {HttpClient} from "@angular/common/http";
import {Place} from "../../models/place";

@Injectable()
export class PlaceService {
    constructor(private _apiService : ApiServiceService,
                private _http : HttpClient) {}

    cnpjValidate(cnpj){
        return this._http
            .post(this._apiService.url + 'web/cnpjValidation', {cnpj});
    }

    emailValidate(email){
        return this._http
            .post(this._apiService.url + 'web/emailValidation', {email});
    }
}
