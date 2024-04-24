import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ListaResultadosComponent } from './pages/lista-resultados/lista-resultados.component';

export const routes: Routes = [
    {path: '', redirectTo: '/peliculas', pathMatch: 'full'},
    {path: 'peliculas', component: PeliculasComponent},
    {path: '', redirectTo: '/lista-resultados', pathMatch: 'full'},
    {path: 'lista-resultados', component: ListaResultadosComponent}
];
