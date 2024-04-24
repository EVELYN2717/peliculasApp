import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PaginacionComponent } from '../../components/paginacion/paginacion.component';


@Component({
  selector: 'app-lista-resultados',
  standalone: true,
  imports: [HeaderComponent, PaginacionComponent],
  providers: [],
  templateUrl: './lista-resultados.component.html',
  styleUrl: './lista-resultados.component.scss'
})
export class ListaResultadosComponent {

}
