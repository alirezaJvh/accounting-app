import {RouterModule, Routes} from '@angular/router';
import {SalePage} from './sale.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: SalePage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SaleRoutingModule {}
