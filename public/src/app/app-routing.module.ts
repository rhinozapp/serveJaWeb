import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth/auth.service";
import {MenuComponent} from "./components/menu/menu.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {WaiterComponent} from "./components/waiter/waiter.component";
import {TableComponent} from "./components/table/table.component";
import {OrderComponent} from "./components/order/order.component";
import {RecoveryPasswordComponent} from "./components/recovery-password/recovery-password.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component : ProfileComponent, canActivate: [AuthGuard]},
    { path: 'menu', component : MenuComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
    { path: 'waiter', component : WaiterComponent, canActivate: [AuthGuard]},
    { path: 'table', component : TableComponent, canActivate: [AuthGuard]},
    { path: 'order', component : OrderComponent, canActivate: [AuthGuard]},
    { path: 'recoveryPassword/:h', component : RecoveryPasswordComponent},
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy : PreloadAllModules
        })
    ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule { }
