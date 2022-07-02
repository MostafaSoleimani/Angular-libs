import { TreeGridRowDirective } from './../../directive/tree-grid-row.directive';
import { INgmTreeGridConfig } from './../../model/tree-grid-config';
import { Component, Input, OnInit, Output, EventEmitter, ContentChild } from '@angular/core';
import { INgmDataSource } from './../../model/datasource-model';
import { INgmExpansion } from '../../model';

@Component({
  selector: 'ngm-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent<T> {
  @Output()
  expand = new EventEmitter<INgmExpansion>();

  @Output()
  collapse = new EventEmitter<INgmExpansion>();

  @Input()
  dataSource!: INgmDataSource<T>;

  @Input()
  config: INgmTreeGridConfig = {
    hasSearch: true,
    columns: [],
    searchFn: (obj: any, txt: string) => {
      return Object.values(obj)
        .filter((x: any) => (typeof x === 'string' || typeof x === 'number'))
        .map(x => String(x))
        .some((y: string) => y.includes(txt))
    }
  }


  onExpand(e: INgmExpansion) {
    this.expand.emit(e)
  }

  onCollapse(e: INgmExpansion) {
    this.collapse.emit(e)
  }

  constructor() { }


}
