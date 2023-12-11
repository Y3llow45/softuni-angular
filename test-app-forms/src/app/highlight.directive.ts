import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  constructor(public renderer: Renderer2, public elementRef: ElementRef) { 
    console.log(elementRef);
  }

  @Input() value!: number;
  @Input() index!: number;

  @HostListener('mouseover', ['$event']) mouseoverHandler(event: any) {
    this.highlight('yellow')
    this.textColor = 'red';
  }

  @HostListener('mouseleave', ['$event']) mouseleaveHandler(event: any) {
    this.highlight('')
    this.textColor = '';
  }

  @HostBinding('style.color') textColor = 'black';

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.highlight(this.value !== this.index ? '' : 'red');
  }

  highlight(color: string) {
    
    //this.elementRef.nativeElement.style.backgroundColor = 'red';

    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
