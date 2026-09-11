import { Routes } from '@angular/router';
import { MainPageComponent } from './modules/core/main/main-page/main-page.component';
import { PatientMainComponent } from './modules/patient/components/patient-main/patient-main.component';

export const routes: Routes = [
    {
    path: '',
    component: MainPageComponent,
    children:[
        {
        path: 'patient/:formType',
        component: PatientMainComponent
        },
        // {
        // path: 'patient/create-patient',
        // component: PatientMainComponent
        // },
        // {
        // path: 'patient/create-patient',
        // component: PatientMainComponent
        // }
    ]
    }
];
