import { Component } from '@angular/core';
import { RecipesService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-book.component.html',
  providers: [RecipesService],
})
export class RecipeBookComponent {
  constructor() {}

  ngOnInit() {}
}
