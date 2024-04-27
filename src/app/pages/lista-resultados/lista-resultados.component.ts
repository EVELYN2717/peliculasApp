import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PaginacionComponent } from '../../components/paginacion/paginacion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card'; 
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-resultados',
  standalone: true,
  imports: [HeaderComponent, 
    PaginacionComponent, 
    HttpClientModule, 
    CardModule,
    MatPaginatorModule],
  providers: [{provide: MatPaginatorIntl}],
  templateUrl: './lista-resultados.component.html',
  styleUrl: './lista-resultados.component.scss'
})

export class ListaResultadosComponent implements OnInit {

  private http = inject(HttpClient);
  public responseData: any = {};
  public value: string = "";
  public listMovie: any = [];
  public imagePoster: string = '../../../assets/image-default.png';

  private options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzdlNjY1YmYzYTc1YzBiMzU1ZWE0ZmIxMTBmNDFlMyIsInN1YiI6IjY2MmE2OTE3MWQ3OGYyMDExZjJmZmE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDQi9ffYMC0HEchq6xW0AlUeoHlOGObj9SLZUIdKasc'
    }
  }


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.http.get( `https://api.themoviedb.org/3/search/movie?query=${params['movie']}&include_adult=false&language=es-CO&page=1`, this.options)
      .subscribe( data  => {
        this.responseData = data;
        this.responseData.results.map( (item: any) => {
          this.listMovie.push({
            ...item,
            poster_path: item.poster_path === null ? this.imagePoster : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`,
          });
        });
      });
    });
  }

  public goToDetails(peli: any) {  
      this.router.navigate(['/detalles-pelicula'], {queryParams: {...peli}})
  }

}
