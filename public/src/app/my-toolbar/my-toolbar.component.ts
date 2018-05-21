import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {MyErrorStateMatcher} from "../default.error-matcher";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PlaceService} from "../services/place/place.service";
import {Place, PlaceLoc} from "../models/place";
import {HelpersService} from "../services/helpers/helpers.service";

@Component({
    selector: 'app-my-toolbar',
    templateUrl: './my-toolbar.component.html',
    styleUrls: ['./my-toolbar.component.css'],
    encapsulation : ViewEncapsulation.None
})
export class MyToolbarComponent implements OnInit {
    constructor(private _dialog: MatDialog) {}

    ngOnInit() {}

    openLoginDialog(): void {
        this._dialog.open(LoginDialogComponent, {
            width: '500px',
            data: {},
            disableClose : true
        })
            .afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

    openSignUpDialog(): void {
        this._dialog.open(SignUpDialogComponent, {
            width: '500px',
            data: {},
            disableClose : true
        })
            .afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }
}

@Component({
    selector: 'login-dialog',
    templateUrl: 'loginDialog.html',
})
export class LoginDialogComponent {
    matcher = new MyErrorStateMatcher();

    private _email : string;
    private _password : string;
    private _myForm : FormGroup;

    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        formBuilder : FormBuilder,
        private _userService : PlaceService) {

        this._myForm = formBuilder.group({
            email : new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password : new FormControl('', [
                Validators.required
            ])
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    loginAction(){
        console.log(this._email, this._password);

        this._userService.doLogin(this._email, this._password)
            .subscribe(data => console.log(data));
    }
}

@Component({
    selector: 'sign-up-dialog',
    templateUrl: 'signUpDialog.html',
})
export class SignUpDialogComponent {
    matcher = new MyErrorStateMatcher();

    private _place : Place = new Place();
    public listState : Array<string> = [
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
    private _repeatPassword : String;
    private _myForm : FormGroup;
    private _addressInfo : any;

    constructor(
        public dialogRef: MatDialogRef<SignUpDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        formBuilder : FormBuilder,
        private _userService : PlaceService,
        private _helpers : HelpersService) {

        this._myForm = formBuilder.group({
            placeName : new FormControl('', [
                Validators.required
            ]),
            email : new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password : new FormControl('', [
                Validators.required
            ]),
            repeatPassword : new FormControl('', [
                Validators.required
            ]),
            cnpj : new FormControl('', [
                Validators.required
            ]),
            zipCode : new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]),
            street : new FormControl('', [
                Validators.required
            ]),
            number : new FormControl('', []),
            complement : new FormControl('', []),
            neighborhood : new FormControl('', [
                Validators.required
            ]),
            city : new FormControl('', [
                Validators.required
            ]),
            state : new FormControl('', []),
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    signUpAction(){
        console.log(this._place);
        /*this._userService.doSignUp()
            .subscribe(data => console.log(data));*/
    }

    zipCodeChange(){
        this._helpers.codeAddress(this._place.zipCode)
            .subscribe((value : any) => {
                this._place.loc = [value[0].geometry.location.lng(), value[0].geometry.location.lat()];

                this._helpers.getAddressInfo(this._place.zipCode)
                    .subscribe(value => {
                        this._place.street = value.logradouro;
                        this._place.complement = value.complemento;
                        this._place.neighborhood = value.bairro;
                        this._place.city = value.localidade;
                        this._place.state = value.uf;

                    }, () => {
                        this._myForm.controls['zipCode'].setErrors({
                            invalid : true
                        });
                    })
            }, () => {
                this._myForm.controls['zipCode'].setErrors({
                    invalid : true
                });
            });
    }
}