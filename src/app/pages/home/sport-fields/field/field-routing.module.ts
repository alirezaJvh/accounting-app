import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoachesPage} from './coaches/coaches.page';
import {FieldPage} from './field.page';
import {CoachPage} from './coaches/coach/coach.page';
import {TrainingPage} from './training/training.page';
import {TrainPage} from './training/train/train.page';

const routes: Routes = [
    {
        path: '',
        component: FieldPage
    },
    {
        path: 'coaches',
        component: CoachesPage,
    },
    {
        path: 'coaches/:id',
        component: CoachPage
    },
    {
        path: 'training',
        component: TrainingPage
    },
    {
        path: 'training/:id',
        component: TrainPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FieldRoutingModule {}
