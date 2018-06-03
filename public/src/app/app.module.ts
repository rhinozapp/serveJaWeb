import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    ErrorStateMatcher,
    MatOptionModule,
    MatSelectModule, MatSnackBarModule
} from '@angular/material';
import {LoginDialogComponent, MyToolbarComponent, SignUpDialogComponent} from './components/my-toolbar/my-toolbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiServiceService} from "./services/api-service/api-service.service";
import {PlaceService} from "./services/place/place.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";
import {HelpersService} from "./services/helpers/helpers.service";
import { AgmCoreModule } from '@agm/core';
import {AuthInterceptor, AuthService} from "./services/auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        MyToolbarComponent,
        LoginDialogComponent,
        SignUpDialogComponent
    ],
    entryComponents : [
        LoginDialogComponent,
        SignUpDialogComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        AgmCoreModule.forRoot({
            libraries: ['geometry', 'places'],
            language: 'pt',
            apiKey : 'AIzaSyDrgnxO_sSTLTfGWcP1rI2XgOGBfk-4wV0'
        })
    ],
    exports : [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule
    ],
    providers: [
        ErrorStateMatcher,
        ApiServiceService,
        PlaceService,
        HelpersService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
