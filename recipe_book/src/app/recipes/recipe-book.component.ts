import { Component } from '@angular/core';
import { Recipe } from '../shared/recipe-model';
import { RecipesService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-book.component.html',
  providers: [RecipesService],
})
export class RecipeBookComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }
}
