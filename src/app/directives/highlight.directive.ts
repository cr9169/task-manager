import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighlight')
  highlightedColor: string = 'yellow';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }
}
