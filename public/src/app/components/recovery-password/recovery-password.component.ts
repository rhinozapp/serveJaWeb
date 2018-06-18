import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-recovery-password',
    templateUrl: './recovery-password.component.html',
    styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit, OnDestroy {
    private _repeatPassword : String;
    private _myFormRecoveryPassword : FormGroup;

    public hide : boolean = true;

    constructor(private route : ActivatedRoute,
                formBuilder : FormBuilder) {
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
        this.route.params
            .subscribe((data : any) => console.log(data));
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
