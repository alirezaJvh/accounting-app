import {NgModule} from '@angular/core';
import {SalePage} from './sale.page';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaleRoutingModule} from './sale-routing.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        SaleRoutingModule
    ],
    declarations: [
        SalePage
    ],
    entryComponents: []
})

export class SaleModule {}
