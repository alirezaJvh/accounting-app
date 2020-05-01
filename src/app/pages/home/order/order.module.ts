import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeModalPage, OrderPage} from './order.page';
import {OrderRoutingModule} from './order-routing.module';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListPage} from './product-list/product-list.page';
import {ImageModal, ProductModal, ProductPage} from './product-list/product/product.page';
// import {HeaderComonent} from '../../../component/header/header.comonent';

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
        ProductListPage,
        ProductPage,
        ProductModal,
        ImageModal

    ],
    entryComponents: [
        CodeModalPage,
        ProductModal,
        ImageModal
    ]
})

export class OrderModule {
}
