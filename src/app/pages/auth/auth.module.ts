import {NgModule} from '@angular/core';
import {LoginPage} from './login/login.page';
import {AuthRoutingModule} from './auth-routing.module';
import {IonicModule} from '@ionic/angular';
import {SignupPage} from './signup/signup.page';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        AuthRoutingModule,
        IonicModule,
        CommonModule
    ],
    providers: [],
    declarations: [
        LoginPage,
        SignupPage
    ],
    bootstrap: [
        LoginPage
    ]
})

export class AuthModule {
}
