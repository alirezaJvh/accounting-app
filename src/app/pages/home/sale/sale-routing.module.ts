import {RouterModule, Routes} from '@angular/router';
import {SalePage} from './sale.page';
import {NgModule} from '@angular/core';
import {ProductInfoPage} from './product-info/product-info.page';
import {CustomerCodePage} from './product-info/customer-code/customer-code.page';
import {FinalSalePage} from './product-info/customer-code/final-sale/final-sale.page';

const routes: Routes = [
    {
        path: '',
        component: SalePage
    },
    {
        path: 'product-info',
        component: ProductInfoPage
    },
    {
        path: 'product-info/customer',
        component: CustomerCodePage
    },
    {
        path: 'product-info/customer/final',
        component: FinalSalePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SaleRoutingModule {}
