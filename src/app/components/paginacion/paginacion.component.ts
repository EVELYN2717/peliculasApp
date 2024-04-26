import { Component, Injectable, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';


@Injectable()

export class MyCustomPaginatorIntl implements MatPaginatorIntl {

  changes = new Subject<void>();
  firstPageLabel = `First page`;
  itemsPerPageLabel = ``;
  lastPageLabel = `Last page`;
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [MatPaginatorModule],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.scss'
})

export class PaginacionComponent {


}
