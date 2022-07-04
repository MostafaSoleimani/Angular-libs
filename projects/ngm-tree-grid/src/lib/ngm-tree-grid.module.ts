import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgmLiveSearchModule } from 'ngm-live-search';
import { TreeGridItemComponent } from './components/tree-grid-item/tree-grid-item.component';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { CellHostDirective } from './directive/cell-host.directive';



@NgModule({
  declarations: [
    TreeGridComponent,
    TreeGridItemComponent,
    CellHostDirective
  ],
  imports: [
    CommonModule,
    NgmLiveSearchModule
  ],
  exports: [
    TreeGridComponent,
    TreeGridItemComponent
  ]
})
export class NgmTreeGridModule { }
