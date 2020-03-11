import {NgModule} from '@angular/core';
import {SportFieldsPage} from './sport-fields.page';
import {SportFieldsRoutingModule} from './sport-fields-routing.module';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {InfinitScrollModule} from '../../../component/infinite-scroll/infinit-scroll.module';
import {FieldModule} from './field/field.module';
@NgModule({
    imports: [
        SportFieldsRoutingModule,
        CommonModule,
        IonicModule,
        InfinitScrollModule,
        FieldModule
    ],
    declarations: [
        SportFieldsPage,
    ]
})

export class SportFieldsModule {
}
