import { Component } from '@angular/core';
import { Recipe } from '../shared/recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-book.component.html',
})
export class RecipeBookComponent {
  selectedRecipe: Recipe;

  constructor() {}

  //   onRecipeClick(payLoad: Recipe) {
  //     console.log('payLoad', payLoad);
  //     this.selectedRecipe = payLoad;
  //   }
}
