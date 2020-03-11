import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SportFieldsPage} from './sport-fields.page';

const routes: Routes = [
    {
        path: '',
        component: SportFieldsPage
    },
    {
        path: ':id',
        loadChildren: () => import('./field/field.module')
            .then(m => m.FieldModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SportFieldsRoutingModule {

}
