import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-scroll-personajes',
  standalone: true,
  imports: [ScrollingModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scroll-personajes.component.html',
  styleUrl: './scroll-personajes.component.scss'
})
export class ScrollPersonajesComponent {
  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);
}
