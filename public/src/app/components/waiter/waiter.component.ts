import {AfterViewInit, Component, Inject, SimpleChanges, ViewChild, OnChanges, Input} from '@angular/core';
import {WaiterService} from "../../services/waiter/waiter.service";
import {AuthService} from "../../services/auth/auth.service";
import {Place} from "../../models/place";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {MyErrorStateMatcher} from "../../default.error-matcher";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Waiter} from "../../models/waiter";
import {HelpersService} from "../../services/helpers/helpers.service";
import {DialogConfirmComponent} from "../helpers/dialog-confirm/dialog-confirm.component";

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements AfterViewInit {
    private _place = new Place;
    public listWaterArray : MatTableDataSource<Waiter>;
    public displayedColumns = ['name', 'username', 'actions'];
    public confirmRef: MatDialogRef<DialogConfirmComponent>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private _waiterService : WaiterService,
                private _authService : AuthService,
                private _dialog: MatDialog,
                private _helperService : HelpersService) {
        this._place = this._authService.decodeProfile();
        this.listWaterArray = new MatTableDataSource([]);
    }

    ngAfterViewInit() {
        this.getListWaiter();
    }

    confirmDelete(waiter){
        this.confirmRef = this._dialog.open(DialogConfirmComponent, {
            width: '400px',
            disableClose : false
        });
        this.confirmRef.componentInstance.confirmMessage = 'Tem certeza que deseja excluir esse garçom?';
        this.confirmRef.componentInstance.confirmTitle = 'Atenção!';

        this.confirmRef
            .afterClosed()
            .subscribe(result => {
                result ?
                    this._waiterService.deleteWaiter(waiter)
                        .subscribe((data : any) => {
                            data.status ?
                                this._helperService.openSnackBar('Garçom deletado!', 'OK') :
                                this._helperService.openSnackBar('Algo de errado aconteceu, tente novamente', 'OK');
                        }) : false;

                this.getListWaiter();
            }, () => this._helperService.openSnackBar('Algo de errado aconteceu, tente novamente', 'OK'));
    }

    confirmResetPassword(waiter){
        this.confirmRef = this._dialog.open(DialogConfirmComponent, {
            width: '400px',
            disableClose : false
        });
        this.confirmRef.componentInstance.confirmMessage = 'Tem certeza que deseja resetar a senha desse garçom? A senha será alterada para SERVEJA';
        this.confirmRef.componentInstance.confirmTitle = 'Atenção!';

        this.confirmRef
            .afterClosed()
            .subscribe(result => {
                result ?
                    this._waiterService.resetPassword(waiter)
                        .subscribe((data : any) => {
                            data.status ?
                                this._helperService.openSnackBar('Senha resetada!', 'OK') :
                                this._helperService.openSnackBar('Algo de errado aconteceu, tente novamente', 'OK');
                        }) : false;

                this.getListWaiter();
            }, () => this._helperService.openSnackBar('Algo de errado aconteceu, tente novamente', 'OK'));
    }

    getListWaiter(){
        this._waiterService.getListWaiter(this._place)
            .subscribe((data : any )=> {
                data.status ?
                    this.defineData(data) :
                    this.listWaterArray;
            });
    }

    defineData(data){
        this.listWaterArray = new MatTableDataSource(data.result);
        this.listWaterArray.paginator = this.paginator;
        this.listWaterArray.sort = this.sort
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.listWaterArray.filter = filterValue;
        if (this.listWaterArray.paginator) {
            this.listWaterArray.paginator.firstPage();
        }
    }

    addWaiter(data){
        this._dialog.open(AddWaiterDialogComponent, {
            width: '500px',
            data: data ? data : {},
            disableClose : true
        })
            .afterClosed()
            .subscribe(() => this.getListWaiter());
    }
}

@Component({
    selector: 'add-waiter-dialog',
    templateUrl: 'addWaiterDialog.html',
    styleUrls: ['./waiter.component.css']
})
export class AddWaiterDialogComponent {
    matcher = new MyErrorStateMatcher();
    private _place = new Place;
    public waiter = new Waiter();
    private _myForm : FormGroup;
    public readonly : boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AddWaiterDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        formBuilder : FormBuilder,
        private _authService : AuthService,
        private _helperService : HelpersService,
        private _waiterService : WaiterService) {
        data ?
            this.waiter = data : false;

        this.waiter._id ?
            this.readonly = true : this.readonly = false;

        this._place = this._authService.decodeProfile();
        this._myForm = formBuilder.group({
            name : new FormControl('', [Validators.required]),
            username : new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.pattern('\\b(\\w+[.]\\w+)')
            ])
        })
    }

    ngOnInit() {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    addWaiterAction(){
        this._waiterService.saveWaiter(this.waiter, this._place)
            .subscribe((data : any) => {
                data.status ?
                    (this._helperService.openSnackBar('Garçom inserido com sucesso!', 'OK'),
                        this.onNoClick()) :
                    this._helperService.openSnackBar('Algo de errado aconteceu, tente novamente', 'OK');
            }, () => this._helperService.openSnackBar('Algo de errado aconteceu, tente novamente', 'OK'));
    }

    applyName(value : string){
        this.waiter._id ?
            this.readonly = true :
            value.indexOf(' ') > 1 ?
                this.waiter.username =
                    value.split(' ')[0].toLowerCase() + '.' + value.split(' ')[value.split(' ').length -1].toLowerCase() :
                this.waiter.username = value.toLowerCase();
    }

    usernameValidation(value){
        !this.waiter._id && !this._myForm.get('username').errors ?
            value ?
                this._waiterService.usernameValidation({username : value})
                .subscribe((data : any) => {
                    !data.status ?
                        this._myForm.get('username').setErrors({'usernameExist': true}) :
                        this._myForm.get('username').setErrors(null);
                }) : false :
            null;
    }
}
