import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-dialog-confirm',
    templateUrl: './dialog-confirm.component.html',
    styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {
    public confirmMessage:string;
    public confirmTitle:string;
    constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {}
}
