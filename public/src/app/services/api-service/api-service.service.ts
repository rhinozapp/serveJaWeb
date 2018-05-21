import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiServiceService {
    private _url : string = 'http://localhost/';

    constructor(public http: HttpClient) {}

    get url(){
        return this._url;
    }
}
