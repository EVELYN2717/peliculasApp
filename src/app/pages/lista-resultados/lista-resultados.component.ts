import { Component, OnInit, inject  } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PaginacionComponent } from '../../components/paginacion/paginacion.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card'; 

@Component({
  selector: 'app-lista-resultados',
  standalone: true,
  imports: [HeaderComponent, 
    PaginacionComponent, 
    HttpClientModule, 
    CardModule],
  providers: [],
  templateUrl: './lista-resultados.component.html',
  styleUrl: './lista-resultados.component.scss'
})
export class ListaResultadosComponent implements OnInit {

  private http = inject(HttpClient);
  public responseData: any = {};

  private options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzdlNjY1YmYzYTc1YzBiMzU1ZWE0ZmIxMTBmNDFlMyIsInN1YiI6IjY2MmE2OTE3MWQ3OGYyMDExZjJmZmE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDQi9ffYMC0HEchq6xW0AlUeoHlOGObj9SLZUIdKasc'
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.http.get( `https://api.themoviedb.org/3/search/movie?query=${params['movie']}&include_adult=false&language=es-CO&page=1`, this.options)
      .subscribe( data  => {
        this.responseData = data;
      });
    });
  }

  
  // public getDescripcionPelicula() {
  //   console.log('ori -->', this.responseData.results)
  //   // let dataService = this.responseData.results;
  //   // dataService.forEach((element:any) => 
  //   // )
  //   // let dataItem: DetallesBasicos = {
  //   //   adult: dataService.
  //   // }
  // }


}
