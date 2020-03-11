import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeModalPage, OrderPage} from './order.page';
import {OrderRoutingModule} from './order-routing.module';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListPage} from './product-list/product-list.page';

@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        OrderPage,
        CodeModalPage,
        ProductListPage
    ],
    entryComponents: [
        CodeModalPage
    ]
})

export class OrderModule {
}
