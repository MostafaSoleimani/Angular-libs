import { animate, AnimationBuilder, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, AfterViewInit, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libSliderLabel]'
})
export class SliderLabelDirective implements AfterViewInit {
  span: any;

  get parentBound() {
    return this.elementRef.nativeElement.getBoundingClientRect()
  }

  get childBound() {
    return this.span.getBoundingClientRect()
  }

  constructor(
    private elementRef: ElementRef,
    private _builder: AnimationBuilder,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngAfterViewInit(): void {
    this.createTextWrapper();
  }

  createTextWrapper() {
    const text = this.elementRef.nativeElement.innerText;
    this.span = this.document.createElement('span');
    this.span.innerText = text;
    this.elementRef.nativeElement.innerText = '';
    this.elementRef.nativeElement.style.textOverflow = 'ellipsis';
    this.elementRef.nativeElement.style.overflow = 'hidden';
    this.elementRef.nativeElement.style.whiteSpace = 'nowrap';
    this.renderer.appendChild(this.elementRef.nativeElement, this.span);
  }

  @HostListener('mouseover', ['$event']) onEnter(e: MouseEvent) {
    if (this.childBound.width > this.parentBound.width) {
      this.makeAnimation(this.span)
    }
  }

  @HostListener('mouseleave', ['$event']) onLeave(e: MouseEvent) {
    if (this.childBound.width > this.parentBound.width) {
      this.removeAnimation(this.span)
    }
  }

  makeAnimation(element: any) {
    // first define a reusable animation
    const myAnimation = this._builder.build([
      style({ marginRight: 0 }),
      animate(1000, style({ marginRight: -(this.childBound.width - this.parentBound.width + 10) + 'px' }))
    ]);

    // use the returned factory object to create a player
    const player = myAnimation.create(element);

    player.play();
  }

  removeAnimation(element: any) {
    // first define a reusable animation
    const myAnimation = this._builder.build([
      // style({ marginRight: -(this.childBound.width - this.parentBound.width + 10) + 'px' }),
      animate(40, style({ marginRight: '0px' }))
    ]);

    // use the returned factory object to create a player
    const player = myAnimation.create(element);

    player.play();
  }



}
