import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule, ErrorStateMatcher, MatOptionModule, MatSelectModule, MatSnackBarModule, MatMenuModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatTabsModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {LoginDialogComponent, MyToolbarComponent, SignUpDialogComponent} from './components/my-toolbar/my-toolbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiServiceService} from "./services/api-service/api-service.service";
import {PlaceService} from "./services/place/place.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";
import {HelpersService} from "./services/helpers/helpers.service";
import { AgmCoreModule } from '@agm/core';
import {AuthGuard, AuthInterceptor, AuthService} from "./services/auth/auth.service";
import {JwtModule} from "@auth0/angular-jwt";
import { AppRoutingModule } from './/app-routing.module';
import {ProfileComponent} from "./components/profile/profile.component";
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import {AddWaiterDialogComponent, WaiterComponent} from './components/waiter/waiter.component';
import { OrderComponent } from './components/order/order.component';
import {WaiterService} from "./services/waiter/waiter.service";
import { DialogConfirmComponent } from './components/helpers/dialog-confirm/dialog-confirm.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

@NgModule({
    declarations: [
        AppComponent,
        MyToolbarComponent,
        LoginDialogComponent,
        SignUpDialogComponent,
        ProfileComponent,
        HomeComponent,
        MenuComponent,
        DashboardComponent,
        TableComponent,
        WaiterComponent,
        OrderComponent,
        AddWaiterDialogComponent,
        DialogConfirmComponent,
        RecoveryPasswordComponent
    ],
    entryComponents : [
        LoginDialogComponent,
        SignUpDialogComponent,
        AddWaiterDialogComponent,
        DialogConfirmComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        LayoutModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatOptionModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        AgmCoreModule.forRoot({
            libraries: ['geometry', 'places'],
            language: 'pt',
            apiKey : 'AIzaSyDrgnxO_sSTLTfGWcP1rI2XgOGBfk-4wV0'
        }),
        JwtModule.forRoot({
            config : { tokenGetter : () => localStorage.getItem('token') }
        }),
        AppRoutingModule
    ],
    exports : [],
    providers: [
        ErrorStateMatcher,
        ApiServiceService,
        PlaceService,
        HelpersService,
        AuthService,
        AuthGuard,
        WaiterService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
