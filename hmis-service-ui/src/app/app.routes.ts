import { Routes } from '@angular/router';
import { MainPageComponent } from './modules/core/main/main-page/main-page.component';
import { PatientMainComponent } from './modules/patient/components/patient-main/patient-main.component';
import { ClaimsMainPageComponent } from './modules/claim/components/claims-main-page/claims-main-page.component';
import { PreAuthMainPageComponent } from './modules/pre-auth/components/pre-auth-main-page/pre-auth-main-page.component';
import { EligibliityMainPageComponent } from './modules/eligiblity/components/eligibliity-main-page/eligibliity-main-page.component';
import { PolicyMainPageComponent } from './modules/policy/components/policy-main-page/policy-main-page.component';
import { BillingMainPageComponent } from './modules/billing/components/billing-main-page/billing-main-page.component';
import { UserMainPageComponent } from './modules/users/components/user-main-page/user-main-page.component';

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
        path: 'claim/:formType',
        component: ClaimsMainPageComponent
        },
        {
        path: 'pre-auth/:formType',
        component: PreAuthMainPageComponent
        },
        {
        path: 'eligiblity/:formType',
        component: EligibliityMainPageComponent
        },
        {
        path: 'policy/:formType',
        component: PolicyMainPageComponent
        },
        {
        path: 'billing/:formType',
        component: BillingMainPageComponent
        },
        {
        path: 'user/:formType',
        component: UserMainPageComponent
        }
    ]
    }
];
