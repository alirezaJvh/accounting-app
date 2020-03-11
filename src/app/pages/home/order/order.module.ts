import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeModalPage, OrderPage} from './order.page';
import {OrderRoutingModule} from './order-routing.module';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule,
        IonicModule,
    ],
    declarations: [
        OrderPage,
        CodeModalPage
    ],
    entryComponents: [
        CodeModalPage
    ]
})

export class OrderModule {
}
