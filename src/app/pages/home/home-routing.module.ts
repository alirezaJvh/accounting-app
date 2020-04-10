import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {ProfilePage} from './profile/profile.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },

    {
        path: 'order',
        loadChildren: () => import('./order/order.module')
            .then(m => m.OrderModule)
    },
    {
        path: 'profile',
        component: ProfilePage
    },
    {
        path: 'sale',
        loadChildren: () => import('./sale/sale.module')
            .then(m => m.SaleModule)
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
