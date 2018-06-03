(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-toolbar></app-my-toolbar>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_my_toolbar_my_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-toolbar/my-toolbar.component */ "./src/app/components/my-toolbar/my-toolbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _services_place_place_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/place/place.service */ "./src/app/services/place/place.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/esm5/ngx-mask.js");
/* harmony import */ var _services_helpers_helpers_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/helpers/helpers.service */ "./src/app/services/helpers/helpers.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_my_toolbar_my_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["MyToolbarComponent"],
                _components_my_toolbar_my_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["LoginDialogComponent"],
                _components_my_toolbar_my_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["SignUpDialogComponent"]
            ],
            entryComponents: [
                _components_my_toolbar_my_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["LoginDialogComponent"],
                _components_my_toolbar_my_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["SignUpDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    libraries: ['geometry', 'places'],
                    language: 'pt',
                    apiKey: 'AIzaSyDrgnxO_sSTLTfGWcP1rI2XgOGBfk-4wV0'
                })
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"],
                _services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_10__["ApiServiceService"],
                _services_place_place_service__WEBPACK_IMPORTED_MODULE_11__["PlaceService"],
                _services_helpers_helpers_service__WEBPACK_IMPORTED_MODULE_14__["HelpersService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/my-toolbar/loginDialog.html":
/*!********************************************************!*\
  !*** ./src/app/components/my-toolbar/loginDialog.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Login</h2>\n<form [formGroup]=\"_myForm\" (submit)=\"loginAction(); false;\">\n    <mat-dialog-content align=\"center\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>E-mail</mat-label>\n            <input matInput\n                   [(ngModel)]=\"_email\"\n                   name=\"email\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   formControlName=\"email\"\n                   [formControl]=\"_myForm.controls.email\"\n                   placeholder=\"Entre com seu e-mail\"\n                   required>\n            <mat-icon matSuffix>person</mat-icon>\n\n            <mat-error *ngIf=\"_myForm.controls.email.hasError('email')\">\n                Digite um e-mail válido\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.email.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Senha</mat-label>\n            <input matInput\n                   [(ngModel)]=\"_password\"\n                   type=\"password\"\n                   name=\"password\"\n\n                   formControlName=\"password\"\n                   [formControl]=\"_myForm.controls.password\"\n                   placeholder=\"Entre com sua senha\">\n            <mat-icon matSuffix>vpn_key</mat-icon>\n\n            <mat-error *ngIf=\"_myForm.controls.password.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n        </mat-form-field>\n    </mat-dialog-content>\n\n    <mat-dialog-actions align=\"end\">\n        <button mat-button\n                mat-dialog-close>Cancelar</button>\n        <button mat-button\n                [type]=\"submit\"\n                [disabled]=\"_myForm.invalid\">GO!</button>\n    </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/components/my-toolbar/my-toolbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-toolbar/my-toolbar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-toolbar-icon {\n    padding: 0 14px;\n}\n\n.my-toolbar-spacer {\n    flex: 1 1 auto;\n}\n\n.mat-form-field{\n    width: 100%;\n}\n\n.pac-container {\n    width: 100%;\n}\n\n.pac-icon{\n    display: none;\n}\n\n.pac-item{\n    border: none;\n}\n\n.pac-item:hover{}\n\n.pac-item-selected{}\n\n.pac-item-query{}\n\n.pac-matched{}\n"

/***/ }),

/***/ "./src/app/components/my-toolbar/my-toolbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-toolbar/my-toolbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span>ServeJá</span>\n        <span class=\"my-toolbar-spacer\"></span>\n        <button mat-button (click)=\"openSignUpDialog()\">CADASTRE-SE</button>\n        <button mat-button (click)=\"openLoginDialog()\">ENTRAR</button>\n    </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/my-toolbar/my-toolbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-toolbar/my-toolbar.component.ts ***!
  \***************************************************************/
/*! exports provided: MyToolbarComponent, LoginDialogComponent, SignUpDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyToolbarComponent", function() { return MyToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpDialogComponent", function() { return SignUpDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _default_error_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../default.error-matcher */ "./src/app/default.error-matcher.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_place_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/place/place.service */ "./src/app/services/place/place.service.ts");
/* harmony import */ var _models_place__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/place */ "./src/app/models/place.ts");
/* harmony import */ var _services_helpers_helpers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/helpers/helpers.service */ "./src/app/services/helpers/helpers.service.ts");
/* harmony import */ var _services_validators_cnpj_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/validators/cnpj.validator */ "./src/app/services/validators/cnpj.validator.ts");
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var MyToolbarComponent = /** @class */ (function () {
    function MyToolbarComponent(_dialog) {
        this._dialog = _dialog;
    }
    MyToolbarComponent.prototype.openLoginDialog = function () {
        this._dialog.open(LoginDialogComponent, {
            width: '500px',
            data: {},
            disableClose: true
        })
            .afterClosed().subscribe(function (result) { });
    };
    MyToolbarComponent.prototype.openSignUpDialog = function () {
        this._dialog.open(SignUpDialogComponent, {
            width: '500px',
            data: {},
            disableClose: true
        })
            .afterClosed().subscribe(function (result) { });
    };
    MyToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-toolbar',
            template: __webpack_require__(/*! ./my-toolbar.component.html */ "./src/app/components/my-toolbar/my-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./my-toolbar.component.css */ "./src/app/components/my-toolbar/my-toolbar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MyToolbarComponent);
    return MyToolbarComponent;
}());

var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(dialogRef, data, formBuilder, _placeService, _authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._placeService = _placeService;
        this._authService = _authService;
        this.matcher = new _default_error_matcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this._myForm = formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    }
    LoginDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginDialogComponent.prototype.loginAction = function () {
        this._authService.doLogin(this._email, this._password)
            .subscribe(function (data) { return console.log(data); });
    };
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-dialog',
            template: __webpack_require__(/*! ./loginDialog.html */ "./src/app/components/my-toolbar/loginDialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_place_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());

var SignUpDialogComponent = /** @class */ (function () {
    function SignUpDialogComponent(dialogRef, data, formBuilder, _placeService, _helpers, _authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._placeService = _placeService;
        this._helpers = _helpers;
        this._authService = _authService;
        this.matcher = new _default_error_matcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this._place = new _models_place__WEBPACK_IMPORTED_MODULE_5__["Place"]();
        this.listState = [
            'SP',
            'AC',
            'AL',
            'AM',
            'AP',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MG',
            'MS',
            'MT',
            'PA',
            'PB',
            'PE',
            'PI',
            'PR',
            'RJ',
            'RN',
            'RO',
            'RR',
            'RS',
            'SC',
            'SE',
            'TO'
        ];
        this.hide = true;
        this.hide2 = true;
        this._myForm = formBuilder.group({
            placeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])
            ]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                this.matchPassword
            ]),
            cnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _services_validators_cnpj_validator__WEBPACK_IMPORTED_MODULE_7__["CnpjValidator"].validCNPJ
            ]),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            neighborhood: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
        });
    }
    SignUpDialogComponent.prototype.ngOnInit = function () {
        this.autoComplete();
    };
    SignUpDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SignUpDialogComponent.prototype.signUpAction = function () {
        var _this = this;
        this.validateExistFields()
            .subscribe(function (results) {
            !results[0].status ?
                (_this._myForm.controls['cnpj'].setErrors({
                    usedCNPJ: true
                }), _this.cnpj.nativeElement.focus()) :
                !results[1].status ?
                    (_this._myForm.controls['email'].setErrors({
                        usedEmail: true
                    }), _this.email.nativeElement.focus()) :
                    _this.signUpAfterValidation();
        }, function () { return _this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'); });
    };
    SignUpDialogComponent.prototype.signUpAfterValidation = function () {
        this._authService.doSignUp(this._place)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    SignUpDialogComponent.prototype.validateExistFields = function () {
        return Object(rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
            this._placeService.cnpjValidate(this._place.cnpj),
            this._placeService.emailValidate(this._place.email)
        ]);
    };
    SignUpDialogComponent.prototype.zipCodeChange = function () {
        var _this = this;
        this._helpers.codeAddress(this._place.zipCode)
            .subscribe(function (value) {
            _this._place.loc = [value[0].geometry.location.lng(), value[0].geometry.location.lat()];
            _this._helpers.getAddressInfo(_this._place.zipCode)
                .subscribe(function (value) {
                _this._place.street = value.logradouro;
                /*this._place.complement = value.complemento;*/
                _this._place.neighborhood = value.bairro;
                _this._place.city = value.localidade;
                _this._place.state = value.uf;
            }, function () {
                _this._myForm.controls['zipCode'].setErrors({
                    invalid: true
                });
            });
        }, function () {
            _this._myForm.controls['zipCode'].setErrors({
                invalid: true
            });
        });
    };
    SignUpDialogComponent.prototype.matchPassword = function (input) {
        return !input.root || !input.root.controls ?
            null :
            input.value !== input.root.controls.password.value ?
                { mismatchedPassword: true } :
                null;
    };
    SignUpDialogComponent.prototype.autoComplete = function () {
        var _this = this;
        this._autoComplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ['establishment'],
            componentRestrictions: {
                country: 'br'
            }
        });
        this._autoComplete.addListener('place_changed', function () {
            var place = _this._autoComplete.getPlace();
            _this._place.namePlace = place.name;
            place.address_components[place.address_components.length - 1].long_name ?
                (_this._place.zipCode = place.address_components[place.address_components.length - 1]
                    .long_name
                    .replace('-', ''), _this.zipCodeChange()) : false;
            _this.email.nativeElement.focus();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignUpDialogComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('email'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignUpDialogComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cnpj'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignUpDialogComponent.prototype, "cnpj", void 0);
    SignUpDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-up-dialog',
            template: __webpack_require__(/*! ./signUpDialog.html */ "./src/app/components/my-toolbar/signUpDialog.html"),
            styles: [__webpack_require__(/*! ./my-toolbar.component.css */ "./src/app/components/my-toolbar/my-toolbar.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_place_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"],
            _services_helpers_helpers_service__WEBPACK_IMPORTED_MODULE_6__["HelpersService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], SignUpDialogComponent);
    return SignUpDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/my-toolbar/signUpDialog.html":
/*!*********************************************************!*\
  !*** ./src/app/components/my-toolbar/signUpDialog.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastrar-se</h2>\n\n<!--AUTOCOMPLETE-->\n<form [formGroup]=\"_myForm\" (submit)=\"signUpAction(); false;\">\n    <mat-dialog-content align=\"center\">\n        <!--SEARCH-->\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Pesquise um estabelicimento</mat-label>\n            <input matInput\n                   #search\n                   placeholder=\"Pesquise um estabelicimento\">\n            <mat-icon matSuffix mat-icon-button (click)=\"search.value=''\">close</mat-icon>\n        </mat-form-field>\n\n        <!--NAME-->\n        <mat-form-field>\n            <mat-label>Nome do Estabelecimento</mat-label>\n            <input matInput\n                   formControlName=\"placeName\"\n                   [(ngModel)]=\"_place.namePlace\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.placeName\"\n                   placeholder=\"Nome do estabelecimento\">\n\n            <mat-error *ngIf=\"_myForm.controls.placeName.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n        </mat-form-field>\n\n        <!--EMAIL-->\n        <mat-form-field>\n            <mat-label>E-mail</mat-label>\n            <input matInput\n                   formControlName=\"email\"\n                   [(ngModel)]=\"_place.email\"\n\n                   #email\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.email\"\n                   placeholder=\"Entre com seu e-mail\">\n\n            <mat-error *ngIf=\"_myForm.controls.email.hasError('email')\">\n                Digite um e-mail válido\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.email.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.email.hasError('usedEmail')\">\n                Este e-mail já foi usado para outra conta\n            </mat-error>\n        </mat-form-field>\n\n        <!--PASSWORD-->\n        <mat-form-field>\n            <mat-label>Senha</mat-label>\n            <input matInput\n                   formControlName=\"password\"\n                   [(ngModel)]=\"_place.password\"\n                   [type]=\"hide ? 'password' : 'text'\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.password\"\n                   placeholder=\"Entre com sua senha\">\n\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n            <mat-error *ngIf=\"_myForm.controls.password.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.password.hasError('minlength')\">\n                Este campo deve ter no mínimo 8 caracteres\n            </mat-error>\n        </mat-form-field>\n\n        <!--REPEAT PASSWORD-->\n        <mat-form-field>\n            <mat-label>Repetir Senha</mat-label>\n            <input matInput\n                   formControlName=\"repeatPassword\"\n                   [(ngModel)]=\"_repeatPassword\"\n                   type=\"password\"\n                   [type]=\"hide2 ? 'password' : 'text'\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.repeatPassword\"\n                   placeholder=\"Entre com sua senha\">\n\n            <mat-icon matSuffix (click)=\"hide2 = !hide2\">{{hide2 ? 'visibility' : 'visibility_off'}}</mat-icon>\n\n            <mat-error *ngIf=\"_myForm.controls.repeatPassword.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.repeatPassword.hasError('mismatchedPassword')\">\n                Senhas diferente\n            </mat-error>\n        </mat-form-field>\n\n        <!--CNPJ-->\n        <mat-form-field>\n            <mat-label>CNPJ</mat-label>\n            <input matInput\n                   formControlName=\"cnpj\"\n                   [(ngModel)]=\"_place.cnpj\"\n\n                   #cnpj\n\n                   [dropSpecialCharacters]=\"true\"\n                   mask='00.000.000/0000-00'\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.cnpj\"\n                   placeholder=\"CNPJ\">\n\n            <mat-error *ngIf=\"_myForm.controls.cnpj.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.cnpj.hasError('validCNPJ')\">\n                CNPJ inválido\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.cnpj.hasError('usedCNPJ')\">\n                Este CNPJ já foi usado para outra conta\n            </mat-error>\n        </mat-form-field>\n\n        <!--CEP-->\n        <mat-form-field>\n            <mat-label>CEP</mat-label>\n            <input matInput\n                   formControlName=\"zipCode\"\n                   [(ngModel)]=\"_place.zipCode\"\n                   (change)=\"zipCodeChange()\"\n\n                   [dropSpecialCharacters]=\"true\"\n                   mask='00000-000'\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.zipCode\"\n                   placeholder=\"CEP\">\n\n            <mat-error *ngIf=\"_myForm.controls.zipCode.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.zipCode.hasError('invalid')\">\n                CEP incorreto, digite um CEP válido\n            </mat-error>\n            <mat-error *ngIf=\"_myForm.controls.zipCode.hasError('minLength')\">\n                CEP deve ter no Mínimo 8 caracteres\n            </mat-error>\n        </mat-form-field>\n\n        <!--STREET-->\n        <mat-form-field>\n            <mat-label>Rua</mat-label>\n            <input matInput\n                   formControlName=\"street\"\n                   [(ngModel)]=\"_place.street\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.street\"\n                   placeholder=\"Rua\">\n\n            <mat-error *ngIf=\"_myForm.controls.street.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n        </mat-form-field>\n\n        <!--NUMBER-->\n        <mat-form-field>\n            <mat-label>Nº</mat-label>\n            <input matInput\n                   [(ngModel)]=\"_place.number\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   formControlName=\"number\">\n        </mat-form-field>\n\n        <!--COMPLEMENT-->\n        <mat-form-field>\n            <mat-label>Complemento</mat-label>\n            <input matInput\n                   [(ngModel)]=\"_place.complement\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   formControlName=\"complement\">\n        </mat-form-field>\n\n        <!--NEIGHBORHOOD-->\n        <mat-form-field>\n            <mat-label>Bairro</mat-label>\n            <input matInput\n                   formControlName=\"neighborhood\"\n                   [(ngModel)]=\"_place.neighborhood\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.neighborhood\"\n                   placeholder=\"Bairro\">\n\n            <mat-error *ngIf=\"_myForm.controls.neighborhood.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n        </mat-form-field>\n\n        <!--CITY-->\n        <mat-form-field>\n            <mat-label>Cidade</mat-label>\n            <input matInput\n                   formControlName=\"city\"\n                   [(ngModel)]=\"_place.city\"\n\n                   [errorStateMatcher]=\"matcher\"\n                   [formControl]=\"_myForm.controls.city\"\n                   placeholder=\"Cidade\">\n\n            <mat-error *ngIf=\"_myForm.controls.city.hasError('required')\">\n                Este campo é obrigatório\n            </mat-error>\n        </mat-form-field>\n\n        <!--STATE-->\n        <mat-form-field>\n            <mat-label>UF</mat-label>\n            <mat-select [(ngModel)]=\"_place.state\"\n\n                        [errorStateMatcher]=\"matcher\"\n                        formControlName=\"state\">\n                <mat-option *ngFor=\"let data of listState\" [value]=\"data\">\n                    {{data}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </mat-dialog-content>\n\n    <mat-dialog-actions align=\"end\">\n        <button mat-button\n                mat-dialog-close>Cancelar</button>\n        <button mat-button\n                [type]=\"submit\"\n                [disabled]=\"_myForm.invalid\">GO!</button>\n    </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/default.error-matcher.ts":
/*!******************************************!*\
  !*** ./src/app/default.error-matcher.ts ***!
  \******************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/** Error when invalid control is dirty or touched*/
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        return (control && control.invalid && (control.dirty || control.touched));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/models/place.ts":
/*!*********************************!*\
  !*** ./src/app/models/place.ts ***!
  \*********************************/
/*! exports provided: Place, PlaceFunction, PlaceLoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceFunction", function() { return PlaceFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceLoc", function() { return PlaceLoc; });
var Place = /** @class */ (function () {
    function Place() {
    }
    return Place;
}());

var PlaceFunction = /** @class */ (function () {
    function PlaceFunction(status, timeStart, timeEnd, menu) {
    }
    return PlaceFunction;
}());

var PlaceLoc = /** @class */ (function () {
    function PlaceLoc(coordinates) {
    }
    return PlaceLoc;
}());



/***/ }),

/***/ "./src/app/services/api-service/api-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/api-service/api-service.service.ts ***!
  \*************************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
        this._url = 'http://localhost/';
    }
    Object.defineProperty(ApiServiceService.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    ApiServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers.service */ "./src/app/services/helpers/helpers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(_apiService, _http, _helpers) {
        this._apiService = _apiService;
        this._http = _http;
        this._helpers = _helpers;
    }
    AuthService.prototype.doLogin = function (email, password) {
        var _this = this;
        return this._http
            .post(this._apiService.url + 'web/doLogin', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (req) { return _this.setSession(req); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return _this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'); }));
    };
    AuthService.prototype.doSignUp = function (place) {
        var _this = this;
        return this._http
            .post(this._apiService.url + 'web/doSignUp', { place: place })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (req) { return _this.setSession(req); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return _this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'); }));
    };
    AuthService.prototype.setSession = function (authResult) {
        localStorage.setItem('token', authResult.token);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _helpers_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]])
    ], AuthService);
    return AuthService;
}());

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        return localStorage.getItem('token') ?
            next.handle(req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            })) :
            next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/helpers/helpers.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/helpers/helpers.service.ts ***!
  \*****************************************************/
/*! exports provided: HelpersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpersService", function() { return HelpersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpersService = /** @class */ (function () {
    function HelpersService(_http, snackBar) {
        this._http = _http;
        this.snackBar = snackBar;
        this.geocoder = new google.maps.Geocoder();
    }
    /*
    * Google Maps
    * */
    HelpersService.prototype.geocode = function (latLng) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            // Invokes geocode method of Google Maps API geocoding.
            _this.geocoder.geocode({ location: latLng }, (function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    console.log('Geocoding service: geocoder failed due to: ' + status);
                    observer.error(status);
                }
            }));
        });
    };
    HelpersService.prototype.codeAddress = function (address) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            // Invokes geocode method of Google Maps API geocoding.
            _this.geocoder.geocode({ address: address }, (function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    observer.error(status);
                }
            }));
        });
    };
    HelpersService.prototype.getCurrentPosition = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            // Invokes getCurrentPosition method of Geolocation API.
            navigator.geolocation.getCurrentPosition(function (position) {
                observer.next(position);
                observer.complete();
            }, function (error) {
                console.log('Geolocation service: ' + error.message);
                observer.error(error);
            });
        });
    };
    /*
    * Via CEP
    * */
    HelpersService.prototype.getAddressInfo = function (zipCode) {
        return this._http.get('https://viacep.com.br/ws/' + zipCode + '/json/');
    };
    /*
    * Snack Bar
    * */
    HelpersService.prototype.openSnackBar = function (content, action) {
        this.snackBar.open(content, action, {
            duration: 2000
        });
    };
    HelpersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], HelpersService);
    return HelpersService;
}());



/***/ }),

/***/ "./src/app/services/place/place.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/place/place.service.ts ***!
  \*************************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceService = /** @class */ (function () {
    function PlaceService(_apiService, _http) {
        this._apiService = _apiService;
        this._http = _http;
    }
    PlaceService.prototype.cnpjValidate = function (cnpj) {
        return this._http
            .post(this._apiService.url + 'web/cnpjValidation', { cnpj: cnpj });
    };
    PlaceService.prototype.emailValidate = function (email) {
        return this._http
            .post(this._apiService.url + 'web/emailValidation', { email: email });
    };
    PlaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ }),

/***/ "./src/app/services/validators/cnpj.validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/validators/cnpj.validator.ts ***!
  \*******************************************************/
/*! exports provided: CnpjValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnpjValidator", function() { return CnpjValidator; });
var CnpjValidator = /** @class */ (function () {
    function CnpjValidator() {
    }
    CnpjValidator.validCNPJ = function (input) {
        var STRICT_STRIP_REGEX = /[-\/.]/g;
        var LOOSE_STRIP_REGEX = /[^\d]/g;
        var BLACKLIST = [
            "00000000000000",
            "11111111111111",
            "22222222222222",
            "33333333333333",
            "44444444444444",
            "55555555555555",
            "66666666666666",
            "77777777777777",
            "88888888888888",
            "99999999999999"
        ];
        var stripped = function (number, strict) {
            var regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
            return (number || '').toString().replace(regex, '');
        };
        var verifierDigit = function (numbers) {
            var index = 2;
            var reverse = numbers.split('').reduce(function (buffer, number) {
                return [parseInt(number, 10)].concat(buffer);
            }, []);
            var sum = reverse.reduce(function (buffer, number) {
                buffer += number * index;
                index = (index === 9 ? 2 : index + 1);
                return buffer;
            }, 0);
            var mod = sum % 11;
            return (mod < 2 ? 0 : 11 - mod);
        };
        // CNPJ must be defined
        if (!stripped(input.value, '')) {
            return ({ validCNPJ: true });
        }
        // CNPJ must have 14 chars
        if (stripped(input.value, '').length !== 14) {
            return ({ validCNPJ: true });
        }
        // CNPJ can't be blacklisted
        if (BLACKLIST.includes(stripped(input.value, ''))) {
            return ({ validCNPJ: true });
        }
        var numbers = stripped(input.value, '').substr(0, 12);
        numbers += verifierDigit(numbers);
        numbers += verifierDigit(numbers);
        return !input ?
            null :
            numbers.substr(-2) === stripped(input.value, '').substr(-2) ?
                null :
                { validCNPJ: true };
    };
    return CnpjValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guilhermedmcassis/Documents/PersonalProjects/serveJa/serveJaWeb/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map