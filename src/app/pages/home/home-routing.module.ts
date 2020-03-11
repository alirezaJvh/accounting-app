import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {ProfilePage} from './profile/profile.page';
import {CompleteProfilePage} from './profile/complete-profile/complete-profile.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'sport-fields',
        loadChildren: () => import('./sport-fields/sport-fields.module')
            .then(m => m.SportFieldsModule)
    },
    {
        path: 'profile',
        component: ProfilePage
    },
    {
        path: 'complete-profile',
        component: CompleteProfilePage
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule {
}
