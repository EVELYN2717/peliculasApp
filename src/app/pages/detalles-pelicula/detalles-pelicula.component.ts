import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ScrollPersonajesComponent } from '../../components/scroll-personajes/scroll-personajes.component';

@Component({
  selector: 'app-detalles-pelicula',
  standalone: true,
  imports: [HeaderComponent, ScrollPersonajesComponent],
  templateUrl: './detalles-pelicula.component.html',
  styleUrl: './detalles-pelicula.component.scss'
})
export class DetallesPeliculaComponent {

}
