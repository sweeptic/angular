import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedPage = 'recipes';

  onSelectedMenu(page: string) {
    console.log('page', page);
    this.selectedPage = page;
  }

  title = 'recipe_book';
}
