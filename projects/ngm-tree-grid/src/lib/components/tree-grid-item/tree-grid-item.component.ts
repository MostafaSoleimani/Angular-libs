import { Component, ContentChild, Input, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, ElementRef } from '@angular/core';
import { TreeGridRowDirective } from '../../directive/tree-grid-row.directive';
import { INgmExpansion, INgmTreeGridConfig } from '../../model';

@Component({
  selector: 'ngm-tree-grid-item',
  templateUrl: './tree-grid-item.component.html',
  styleUrls: ['./tree-grid-item.component.scss']
})
export class TreeGridItemComponent {
  @Input() level = 1;
  @Input() data: any[] = [];
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
  @Input() getChildrenFn: (obj: any) => any[] = (obj: any) => {
    return obj['children'];
  };

  @Output()
  expand = new EventEmitter<INgmExpansion>();

  @Output()
  collapse = new EventEmitter<INgmExpansion>();
  constructor() { }

  openItem(item: any) {
    item['isOpen'] = true;
    this.expand.emit({
      item,
      level: this.level
    })
  }
  closeItem(item: any) {
    item['isOpen'] = false;
    this.collapse.emit({
      item,
      level: this.level
    })
  }

  onExpand(e: INgmExpansion) {
    this.expand.emit(e)
  }

  onCollapse(e: INgmExpansion) {
    this.collapse.emit(e)
  }

  ngOnInit() {
    console.log('config:   ', this.config, this.getChildrenFn)
  }

}
