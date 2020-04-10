import {RouterModule, Routes} from '@angular/router';
import {SalePage} from './sale.page';
import {NgModule} from '@angular/core';
import {ProductInfoPage} from './product-info/product-info.page';

const routes: Routes = [
    {
        path: '',
        component: SalePage
    },
    {
        path: 'product-info',
        component: ProductInfoPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SaleRoutingModule {}
