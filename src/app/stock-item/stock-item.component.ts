import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {


  displayedColumns: string[] = ['position', 'name', 'weight', 'Qulity', 'selling', 'Remain', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  //filter code
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  Qulity: number;
  selling: number;
  Remain: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, Qulity: 20, selling: 23, Remain: 43, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, Qulity: 20, selling: 23, Remain: 43, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, Qulity: 20, selling: 23, Remain: 43, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, Qulity: 20, selling: 23, Remain: 43, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, Qulity: 20, selling: 23, Remain: 43, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, Qulity: 20, selling: 23, Remain: 43, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, Qulity: 20, selling: 23, Remain: 43, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, Qulity: 20, selling: 23, Remain: 43, symbol: 'O' },
];