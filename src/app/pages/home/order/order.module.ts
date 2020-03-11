import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderPage} from './order.page';
import {OrderRoutingModule} from './order-routing.module';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule,
        IonicModule
    ],
    declarations: [
        OrderPage
    ]
})

export class OrderModule {
}
