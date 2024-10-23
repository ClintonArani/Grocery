import { Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent },
    {path: 'homepage',component: LandingComponent},
    {path: 'login',component:LoginComponent}
];
