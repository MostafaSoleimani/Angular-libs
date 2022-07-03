import { TreeGridRowDirective } from './../../directive/tree-grid-row.directive';
import { INgmTreeGridConfig } from './../../model/tree-grid-config';
import { Component, Input, OnInit, Output, EventEmitter, ContentChild, ContentChildren, QueryList, TemplateRef } from '@angular/core';
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

  @ContentChildren('treeGridCell') cellContents!: QueryList<TemplateRef<any>>;

  filterText = '';
  filteredData: T[] = [];

  showGrid = true;

  constructor() { }

  onExpand(e: INgmExpansion) {
    this.expand.emit(e)
  }

  onCollapse(e: INgmExpansion) {
    this.collapse.emit(e)
  }

  refreshGrid() {
    this.showGrid = false;
    setTimeout(() => {
      this.showGrid = true
    }, 0);
  }

  onSearch(text: string) {
    console.log('searched', text)
    if (typeof text === 'string' && text != '') {
      this.filterText = text
    } else {
      this.filterText = ''
    }
    if (!this.config.searchFn) {
      throw new Error('You should Provide searchFn')
    }
    this.refreshGrid();
    this.filterTree();
  }

  ///////////////////////////////////////////////////////////////////////////
  /////////////////////********************************/////////////////////
  ///////////**********     Start Filtering       **********///////////

  filterTree() {
    if (this.dataSource.data && this.filterText) {
      this.filteredData = [...this.dataSource.data]
        .filter((item) =>
          this.hasIncludedSearchTextInChildren(item, this.filterText)
        )
        .map((item) => this.filtering(item, this.filterText));
    } else {
      this.filteredData = [...this.dataSource.data];
    }
  }

  filtering(node: T, text: string): T {
    return {
      ...node,
      isOpen: true,
      show: true,
      nodes: this.dataSource.getChildrenFn(node)
        ?.filter((item) => this.hasIncludedSearchTextInChildren(item, text))
        .map((item) => this.filtering(item, text)),
    };
  }

  hasIncludedSearchTextInChildren(node: any, searchText: string): boolean {
    // console.log(node, searchText);
    // if (node.name.toLowerCase().includes(searchText.toLowerCase())) {
    // }
    if (this.config.searchFn!(node, searchText)) {
      return true;
    }
    if (this.dataSource.getChildrenFn(node)) {
      return this.dataSource.getChildrenFn(node).some((child: any) =>
        this.hasIncludedSearchTextInChildren(child, searchText)
      );
    }
    return false;
  }

  /////////////**********     End Filtering      **********////////////
  /////////////////////********************************/////////////////////
  //////////////////////////////////////////////////////////////////////////



}
