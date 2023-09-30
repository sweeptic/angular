import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe-model';
import { RecipesService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
