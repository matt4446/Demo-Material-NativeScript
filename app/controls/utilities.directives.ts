import {Directive, ElementRef, Renderer} from '@angular/core';

/*
    Still cannot use...
    Error: Not implemented: setStyleProperty
 */

@Directive({
    selector: '[float-left]'
})
export class LeftElement {
    constructor(el: ElementRef, public renderer: Renderer) {
       console.log('set element left');
       renderer.setElementStyle(el, 'horizontal-align', 'left');
    }
}

@Directive({
    selector: '[float-right]'
})
export class RightElement {
    constructor(el: ElementRef, public renderer: Renderer) {
       console.log('set element left');
       renderer.setElementStyle(el, 'horizontal-align', 'right');
    }
}