import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShortenPipe } from 'src/shorten.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, ShortenPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// type ErrorCode = string | number;
// interface Answer {
//     string | number;
// }

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
