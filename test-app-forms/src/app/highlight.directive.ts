import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  constructor() { }

  @Input() value!: number;
  @Input() index!: number;

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges)
  }
}
