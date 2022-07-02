import { NgModule } from '@angular/core';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { TreeGridItemComponent } from './components/tree-grid-item/tree-grid-item.component';
import { TreeGridRowDirective } from './directive/tree-grid-row.directive';
import { TreeGridCellDirective } from './directive/tree-grid-cell.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TreeGridComponent,
    TreeGridItemComponent,
    TreeGridRowDirective,
    TreeGridCellDirective
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    TreeGridComponent,
    TreeGridRowDirective,
    TreeGridCellDirective
  ]
})
export class NgmTreeGridModule { }
