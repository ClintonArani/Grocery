import { Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent },
    {path: 'homepage',component: LandingComponent}
];
