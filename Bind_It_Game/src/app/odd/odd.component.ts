import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent {
  //   @ViewChild('num', { static: true }) numRef: ElementRef;
  @Input() number: number;
}
