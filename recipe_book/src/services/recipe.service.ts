import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe-model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Injectable()
export class RecipesService {
  recipesList: Recipe[] = [
    new Recipe(
      'test recipe',
      'recipe desc',
      'https://plus.unsplash.com/premium_photo-1661587759162-d2dd4934ce33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      [
        { name: 'breead', amount: 3 },
        { name: 'cheese', amount: 32 },
      ]
    ),
    new Recipe(
      'test recipe 2 ',
      'recipe desc 2',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80',
      [
        { name: 'eggs', amount: 7 },
        { name: 'tomato', amount: 2 },
      ]
    ),
  ];

  selectedRecipe: Recipe;

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipesList];
  }

  getRecipe(index: number) {
    return this.recipesList[index];
  }

  setIngredients(ingredient: Ingredient[]) {
    this.slService.addIngridients(ingredient);
  }
}
