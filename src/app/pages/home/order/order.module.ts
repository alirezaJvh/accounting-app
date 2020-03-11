import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderPage} from './order.page';
import {OrderRoutingModule} from './order-routing.module';

@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule
    ],
    declarations: [
        OrderPage
    ]
})

export class OrderModule {
}
