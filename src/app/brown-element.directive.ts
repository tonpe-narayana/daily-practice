import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appBrownElement]'
})
export class BrownElementDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "Red"
   }

}
