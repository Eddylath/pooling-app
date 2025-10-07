import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { isAuthorized } from './secure/home/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'home',
        loadComponent: () => import('./secure/home/home.component').then(m => m.HomeComponent),
        canActivate: [isAuthorized]
    }
];
