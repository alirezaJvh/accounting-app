import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

import {HomePage} from './home.page';
import {HomeRoutingModule} from './home-routing.module';
import {ProfilePage} from './profile/profile.page';
import {CompleteProfilePage} from './profile/complete-profile/complete-profile.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeRoutingModule
    ],
    declarations: [
        HomePage,
        ProfilePage,
    ]
})
export class HomePageModule {
}
