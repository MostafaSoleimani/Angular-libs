import { AfterContentInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { CellHostDirective } from '../../directive/cell-host.directive';
import { INgmExpansion, INgmTreeGridConfig } from '../../model';

@Component({
  selector: 'ngm-tree-grid-item',
  templateUrl: './tree-grid-item.component.html',
  styleUrls: ['./tree-grid-item.component.scss']
})
export class TreeGridItemComponent implements AfterContentInit {
  /** The level of node */
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

  @Input() cellInputs: any;


  @ViewChildren(CellHostDirective) cellPanes!: QueryList<CellHostDirective>;


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

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.cellPanes.forEach((x, i) => {
        x.viewContainerRef.clear();
        x.viewContainerRef.createEmbeddedView(this.cellInputs.get(i % this.cellInputs.length)!, {
          $implicit: this.data[Math.floor(i / this.cellInputs.length)]
        })
      });
    }, 10);
  }


}
