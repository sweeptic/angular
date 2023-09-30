import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe-model';
import { RecipesService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  onAddToShoppingList() {
    this.recipeService.setIngredients(this.recipe.ingredients);
  }
}
