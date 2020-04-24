import {NgModule} from '@angular/core';
import {ProductCodeModal, SalePage} from './sale.page';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaleRoutingModule} from './sale-routing.module';
import {ProductInfoPage} from './product-info/product-info.page';
import {CustomerCodeModal, CustomerCodePage} from './product-info/customer-code/customer-code.page';
import {FinalSalePage} from './product-info/customer-code/final-sale/final-sale.page';

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
        ProductInfoPage,
        CustomerCodePage,
        CustomerCodeModal,
        FinalSalePage
    ],
    entryComponents: [
        ProductCodeModal,
        CustomerCodeModal
    ]
})

export class SaleModule {}
