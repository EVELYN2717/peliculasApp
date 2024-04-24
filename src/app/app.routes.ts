import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

export const routes: Routes = [
    {path: '', redirectTo: '/peliculas', pathMatch: 'full'},
    {path: 'peliculas', component: PeliculasComponent}
];
