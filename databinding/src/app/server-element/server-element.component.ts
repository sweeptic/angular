import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  //   @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(
      'Text content in ngOnInit: ' + this.header.nativeElement.textContent
    );
    console.log(
      'Text content in paragraph (ngOnInit): ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(
      'Text content in paragraph (ngAfterContentInit): ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentCheck() {
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(
      'Text content in ngAfterViewInit: ' +
        this.header.nativeElement.textContent
    );
  }

  ngAfterViewCheck() {
    console.log('ngAfterViewCheck called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
