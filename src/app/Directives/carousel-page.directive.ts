import { Directive,TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCarouselPage]',
  standalone: true
})
export class CarouselPageDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
