import { NgModule } from '@angular/core';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { TreeGridItemComponent } from './components/tree-grid-item/tree-grid-item.component';
import { TreeGridRowDirective } from './directive/tree-grid-row.directive';
import { TreeGridCellDirective } from './directive/tree-grid-cell.directive';
import { CommonModule } from '@angular/common';
import { CellHostDirective } from './directive/cell-host.directive';
import { NgmLiveSearchModule } from 'ngx-live-search';



@NgModule({
  declarations: [
    TreeGridComponent,
    TreeGridItemComponent,
    TreeGridRowDirective,
    TreeGridCellDirective,
    CellHostDirective
  ],
  imports: [
    CommonModule,
    NgmLiveSearchModule
  ],
  exports: [
    TreeGridComponent,
    TreeGridItemComponent,
    TreeGridRowDirective,
    TreeGridCellDirective
  ]
})
export class NgmTreeGridModule { }
