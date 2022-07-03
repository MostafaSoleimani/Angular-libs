import { AnimationBuilder } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Directive, Input, AfterViewInit, ElementRef, Renderer2, Inject, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngmTreeGridCell]'
})
export class TreeGridCellDirective implements AfterViewInit {
  @Input() offset: number = 0;
  @Input() level: number = 0;
  @Input() className: number = 0;
  span: any;

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any
  ) {

  }

  update(data: any) {
    this.containerRef.clear();
    this.containerRef.createEmbeddedView(this.templateRef, {
      $implicit: data
    });
  }

  ngAfterViewInit(): void {
    console.log('offset:   ', this.offset, this.level);
  }

  createTextWrapper() {
    const text = this.elementRef.nativeElement.innerText;
    this.span = this.document.createElement('span');
    this.span.innerText = text;
    this.span.classList.add(this.className);
    this.elementRef.nativeElement.innerText = '>';
    // this.elementRef.nativeElement.style.textOverflow = 'ellipsis';
    // this.elementRef.nativeElement.style.overflow = 'hidden';
    this.elementRef.nativeElement.style.marginLeft = this.offset * 20 + 'px';
    this.renderer.appendChild(this.elementRef.nativeElement, this.span);
  }

}
