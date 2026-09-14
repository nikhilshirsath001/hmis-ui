import { Routes } from '@angular/router';
import { MainPageComponent } from './modules/core/main/main-page/main-page.component';
import { PatientMainComponent } from './modules/patient/components/patient-main/patient-main.component';
import { ClaimsMainPageComponent } from './modules/claim/components/claims-main-page/claims-main-page.component';

export const routes: Routes = [
    {
    path: '',
    component: MainPageComponent,
    children:[
        {
        path: 'patient/:formType',
        component: PatientMainComponent
        },
        {
        path: 'claim/create-doctor',
        component: ClaimsMainPageComponent
        }
        // {
        // path: 'patient/create-patient',
        // component: PatientMainComponent
        // }
    ]
    }
];
