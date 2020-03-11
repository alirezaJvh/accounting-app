import {RouterModule, Routes} from '@angular/router';
import {OrderPage} from './order.page';
import {NgModule} from '@angular/core';
import {ProductListPage} from './product-list/product-list.page';

const routes: Routes = [
    {
        path: '',
        component: OrderPage
    },
    {
        path: 'product-list',
        component: ProductListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrderRoutingModule {

}
