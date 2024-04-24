import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BuscarComponent } from '../../components/buscar/buscar.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [HeaderComponent, BuscarComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {

}
