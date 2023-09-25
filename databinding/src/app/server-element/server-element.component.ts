import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('textContent of header', this.header.nativeElement.textContent);
    console.log(
      'textContent of paragraph',
      this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheckCalled called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(
      'textContent of paragraph',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentCheck() {
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(
      'textContent after ngAfterViewInit',
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
