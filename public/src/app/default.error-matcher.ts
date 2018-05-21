import {ErrorStateMatcher} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";

/** Error when invalid control is dirty or touched*/
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control && control.invalid && (control.dirty || control.touched));
    }
}
