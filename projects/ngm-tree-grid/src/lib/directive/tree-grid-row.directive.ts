import { INgmDataSource } from './../model/datasource-model';
import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ngmTreeGrid]'
})
export class TreeGridRowDirective implements AfterViewInit {
  @Input() ngmTreeGridOf : INgmDataSource<any> = {
    data: [],
    getChildrenFn: (obj) => obj.children
  };
  @Input() ngmTreeGridFilter: string = '';
  @Input() ngmTreeGridWithPadding: number = 20;

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    console.log('TreeGridRowDirective:   ', this.ngmTreeGridOf);
    this.updateView();
  }

  updateView() {
    this.containerRef.clear();
    this.addView(this.ngmTreeGridOf.data, 1)
  }

  addView(data: any[], level: number) {
    data.forEach(x => {
      this.insertView(x, level);
      this.addView(this.ngmTreeGridOf.getChildrenFn(x), level + 1);
    })
  }

  insertView(data: any, level: number) {
    this.containerRef.createEmbeddedView(this.templateRef, {
      $implicit: data,
      level,
      padding: this.ngmTreeGridWithPadding * level + 'px'
    })
  }

}
