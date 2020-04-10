import {NgModule} from '@angular/core';
import {ProductCodeModal, SalePage} from './sale.page';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaleRoutingModule} from './sale-routing.module';
import {ProductInfoPage} from './product-info/product-info.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        SaleRoutingModule
    ],
    declarations: [
        SalePage,
        ProductCodeModal,
        ProductInfoPage
    ],
    entryComponents: [
        ProductCodeModal
    ]
})

export class SaleModule {}
