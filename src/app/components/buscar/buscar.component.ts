import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})



export class BuscarComponent implements OnInit {
  
  constructor(private router: Router) {}


  private http = inject(HttpClient);
  value: string = "";

  private options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzdlNjY1YmYzYTc1YzBiMzU1ZWE0ZmIxMTBmNDFlMyIsInN1YiI6IjY2MmE2OTE3MWQ3OGYyMDExZjJmZmE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDQi9ffYMC0HEchq6xW0AlUeoHlOGObj9SLZUIdKasc'
    }
  }

  ngOnInit(): void {
    this.getRequesToken();    
  }
  
  public getRequesToken() {
    this.http.get('https://api.themoviedb.org/3/authentication/token/new', this.options)
    .subscribe(data => {
      console.log('RESPONSE --> ',data);
    });
  }

  public setSearch(event: any) {
    this.value = event.target.value;
    
  }

  public onKeydown(event: any) {
    if (event.key === "Enter") {    
      this.router.navigate(['/lista-resultados'], {queryParams: {movie: this.value}})
      console.log(this.value);
    } else {
      console.log(this.value);
    }
  }

}
