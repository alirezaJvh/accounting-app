import {NgModule} from '@angular/core';
import {FieldPage} from './field.page';
import {IonicModule} from '@ionic/angular';
import {HidenavModule} from 'ionic4-hidenav';
import {FieldRoutingModule} from './field-routing.module';
import {CoachesPage} from './coaches/coaches.page';
import {CommonModule} from '@angular/common';
import {CoachPage} from './coaches/coach/coach.page';
import {TrainingPage} from './training/training.page';
import {TrainPage} from './training/train/train.page';


@NgModule({
    imports: [
        IonicModule,
        HidenavModule,
        FieldRoutingModule,
        CommonModule
    ],
    declarations: [
        FieldPage,
        CoachesPage,
        CoachPage,
        TrainingPage,
        TrainPage
    ]
})

export class FieldModule {

}
