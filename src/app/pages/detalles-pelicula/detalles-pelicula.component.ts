import { Component, OnInit, Input, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ScrollPersonajesComponent } from '../../components/scroll-personajes/scroll-personajes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalles-pelicula',
  standalone: true,
  imports: [HeaderComponent, 
    ScrollPersonajesComponent,
    HttpClientModule],
  templateUrl: './detalles-pelicula.component.html',
  styleUrl: './detalles-pelicula.component.scss'
})
export class DetallesPeliculaComponent implements OnInit {

  public movie: any = {};
  public year: string = "";
  public responseData: any = {};
  private http = inject(HttpClient);
  public listCast = new Array;
  private options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzdlNjY1YmYzYTc1YzBiMzU1ZWE0ZmIxMTBmNDFlMyIsInN1YiI6IjY2MmE2OTE3MWQ3OGYyMDExZjJmZmE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDQi9ffYMC0HEchq6xW0AlUeoHlOGObj9SLZUIdKasc'
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {    
      this.movie = params;
      this.http.get( `https://api.themoviedb.org/3/movie/${this.movie.id}/credits?language=en-US`, this.options)
      .subscribe( data  => {
        this.responseData = data;
        this.year = this.movie.release_date.substring(0, 4);
      });
    });


 }

}
