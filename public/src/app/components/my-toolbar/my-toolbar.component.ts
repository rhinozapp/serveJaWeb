import {
    Component,
    ElementRef,
    Inject,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {MyErrorStateMatcher} from "../../default.error-matcher";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PlaceService} from "../../services/place/place.service";
import {Place} from "../../models/place";
import {HelpersService} from "../../services/helpers/helpers.service";
import {} from '@types/googlemaps';
import {CnpjValidator} from "../../services/validators/cnpj.validator";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {AuthService} from "../../services/auth/auth.service";

@Component({
    selector: 'app-my-toolbar',
    templateUrl: './my-toolbar.component.html',
    styleUrls: ['./my-toolbar.component.css'],
    encapsulation : ViewEncapsulation.None
})
export class MyToolbarComponent {
    constructor(private _dialog: MatDialog) {}

    openLoginDialog(): void {
        this._dialog.open(LoginDialogComponent, {
            width: '500px',
            data: {},
            disableClose : true
        })
            .afterClosed().subscribe(result => {});
    }

    openSignUpDialog(): void {
        this._dialog.open(SignUpDialogComponent, {
            width: '500px',
            data: {},
            disableClose : true
        })
            .afterClosed().subscribe(result => {});
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
        private _placeService : PlaceService,
        private _authService : AuthService) {

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
        this._authService.doLogin(this._email, this._password)
            .subscribe(data => console.log(data));
    }
}

@Component({
    selector: 'sign-up-dialog',
    templateUrl: 'signUpDialog.html',
    styleUrls: ['./my-toolbar.component.css']
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
    public formBuilder : FormBuilder;

    public hide : boolean = true;
    public hide2 : boolean = true;

    @ViewChild('search') public searchElementRef: ElementRef;
    @ViewChild('email') public email: ElementRef;
    @ViewChild('cnpj') public cnpj: ElementRef;
    private _autoComplete;

    constructor(
        public dialogRef: MatDialogRef<SignUpDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        formBuilder : FormBuilder,
        private _placeService : PlaceService,
        private _helpers : HelpersService,
        private _authService : AuthService) {
        this._myForm = formBuilder.group({
            placeName : new FormControl('', [
                Validators.required
            ]),
            email : new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password : new FormControl('', [
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8)
                ])
            ]),
            repeatPassword : new FormControl('', [
                Validators.required,
                this.matchPassword
            ]),
            cnpj : new FormControl('', [
                Validators.required,
                CnpjValidator.validCNPJ
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

    ngOnInit() {
        this.autoComplete();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    signUpAction(){
        this.validateExistFields()
            .subscribe((results : any) => {
                !results[0].status ?
                    (this._myForm.controls['cnpj'].setErrors({
                        usedCNPJ : true
                    }), this.cnpj.nativeElement.focus()) :

                    !results[1].status ?
                        (this._myForm.controls['email'].setErrors({
                            usedEmail : true
                        }), this.email.nativeElement.focus()) :

                        this.signUpAfterValidation();

            }, () => this._helpers.openSnackBar('Algo deu errado! Tente novamente', 'OK'));
    }

    signUpAfterValidation(){
        this._authService.doSignUp(this._place)
            .subscribe(data => {
                console.log(data);
            })
    }

    validateExistFields(){
        return forkJoin([
            this._placeService.cnpjValidate(this._place.cnpj),
            this._placeService.emailValidate(this._place.email)
        ]);
    }

    zipCodeChange(){
        this._helpers.codeAddress(this._place.zipCode)
            .subscribe((value : any) => {
                this._place.loc = [value[0].geometry.location.lng(), value[0].geometry.location.lat()];

                this._helpers.getAddressInfo(this._place.zipCode)
                    .subscribe(value => {
                        this._place.street = value.logradouro;
                        /*this._place.complement = value.complemento;*/
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

    matchPassword(input: AbstractControl) : { [key: string]: any }{
        return !input.root || !(<FormGroup>input.root).controls ?
            null :
            input.value !== (<FormGroup>input.root).controls.password.value ?
                {mismatchedPassword : true} :
                null;
    }

    autoComplete(){
        this._autoComplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ['establishment'],
            componentRestrictions: {
                country: 'br'
            }
        });

        this._autoComplete.addListener('place_changed', () => {
            let place: google.maps.places.PlaceResult = this._autoComplete.getPlace();

            this._place.namePlace = place.name;

            place.address_components[place.address_components.length -1].long_name ?
                (this._place.zipCode = place.address_components[place.address_components.length -1]
                    .long_name
                    .replace('-', ''), this.zipCodeChange()) : false;

            this.email.nativeElement.focus();
        });
    }
}
