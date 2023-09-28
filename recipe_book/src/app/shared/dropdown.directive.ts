import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open')
  isOpen: boolean;

  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
  }
}
