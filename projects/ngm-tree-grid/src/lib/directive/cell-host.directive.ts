import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngmCellHost]'
})
export class CellHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
