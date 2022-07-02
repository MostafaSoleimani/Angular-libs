import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngmTreeGridRow]'
})
export class TreeGridRowDirective implements AfterViewInit {

  constructor(
    private containerref: ViewContainerRef,
    // private templateRef: TemplateRef<any>,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    console.log('TreeGridRowDirective:   ', this.elementRef);
    // this.containerref.createEmbeddedView(this.templateRef, {
    //   $implicit: 'Implicit data'
    // })
  }

}
