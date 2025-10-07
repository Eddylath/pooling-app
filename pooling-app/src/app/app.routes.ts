import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { isAuthorized } from './secure/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'home',
        loadComponent: () => import('./secure/home/home.component').then(m => m.HomeComponent),
        canActivate: [isAuthorized]
    },
    {
        path: 'bookride',
        loadComponent: () => import('./secure/book-ride/book-ride.component').then(m => m.BookRideComponent),
        canActivate: [isAuthorized]
    },
    {
        path: 'addride',
        loadComponent: () => import('./secure/add-ride/add-ride.component').then(m => m.AddRideComponent),
        canActivate: [isAuthorized]
    },
];
