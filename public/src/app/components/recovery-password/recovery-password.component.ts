import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecoveryPasswordService} from "../../services/recoveryPassword/recovery-password.service";
import {HelpersService} from "../../services/helpers/helpers.service";

@Component({
    selector: 'app-recovery-password',
    templateUrl: './recovery-password.component.html',
    styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit, OnDestroy {
    private _repeatPassword : string;
    private password : string;
    private _myFormRecoveryPassword : FormGroup;
    private _hash : string;

    public hide : boolean = true;

    constructor(private route : ActivatedRoute,
                formBuilder : FormBuilder,
                private _recoveryPasswordService : RecoveryPasswordService,
                private _router : Router,
                private _helper : HelpersService) {
        this._myFormRecoveryPassword = formBuilder.group({
            password : new FormControl('', [
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8)
                ])
            ]),
            repeatPassword : new FormControl('', [
                Validators.required,
                this.matchPassword
            ])
        });
    }

    ngOnInit() {
        this.checkParams();
    }

    checkParams(){
        this.route.params
            .subscribe((data : any) => {
                this._hash = data.h;
                data.h ?
                    this._recoveryPasswordService.recoveryPasswordGetHash(data.h)
                        .subscribe((data : any) => {
                            !data.status ?
                                (this._helper.snackBar.open('Este link não está mais ativo!', 'OK'), this._router.navigate(['/'])) : false;

                        }, () => this._helper.snackBar.open('Algo de errado aconteceu, tente novamente.', 'OK')) : false;
            });
    }

    resetPasswordAction(){
        this._recoveryPasswordService.recoveryPassword({
            hashRecovery : this._hash,
            password: this.password
        }).subscribe((data : any) => {
            data.status ?
                (this._helper.snackBar.open('Você resetou sua senha! Faça o login com a nova senha.', 'OK'), this._router.navigate(['/'])) :
                (this._helper.snackBar.open('Algo de errado aconteceu, tente novamente.', 'OK'));
        }, () => (this._helper.snackBar.open('Algo de errado aconteceu, tente novamente.', 'OK'), this._router.navigate(['/'])));
    }

    matchPassword(input: AbstractControl) : { [key: string]: any }{
        return !input.root || !(<FormGroup>input.root).controls ?
            null :
            input.value !== (<FormGroup>input.root).controls.password.value ?
                {mismatchedPassword : true} :
                null;
    }

    ngOnDestroy(){}
}
