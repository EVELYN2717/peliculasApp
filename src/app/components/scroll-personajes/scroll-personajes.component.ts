import { Component, OnInit, inject, ChangeDetectionStrategy, ViewEncapsulation, Input, AfterViewInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { ListaPeliculasModel } from '../../models/lista-peliculas.model';
import { ListaCasting } from '../../models/lista-peliculas.model copy';


@Component({
  selector: 'app-scroll-personajes',
  standalone: true,
  imports: [ScrollingModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scroll-personajes.component.html',
  styleUrl: './scroll-personajes.component.scss'
})
export class ScrollPersonajesComponent implements OnInit {

  @Input() characters : any = [];
  

  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);

  public listCast: any = [];
  public imagePoster: string = '../../../assets/image-default.png';

  ngOnChanges(): void {
    if(this.characters !== undefined) {
      this.characters.forEach((person: any) => {
        this.listCast.push({
          name: person.name,
          character: person.character,
          profile_path: person.profile_path === null ? this.imagePoster : `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`,
        });
      });
    }
    
  }

  ngOnInit(): void {}
}
