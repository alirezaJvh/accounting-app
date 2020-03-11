import {RouterModule, Routes} from '@angular/router';
import {OrderPage} from './order.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: OrderPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrderRoutingModule {

}
