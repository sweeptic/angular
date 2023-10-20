import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe-model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddIngredients } from 'src/app/shopping-list/store/shopping-list.action';
import { AppState } from 'src/app/shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  //   recipesList: Recipe[] = [
  //     new Recipe(
  //       'test recipe',
  //       'recipe desc',
  //       'https://plus.unsplash.com/premium_photo-1661587759162-d2dd4934ce33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  //       [
  //         { name: 'bread', amount: 3 },
  //         { name: 'cheese', amount: 32 },
  //       ]
  //     ),
  //     new Recipe(
  //       'test recipe 2 ',
  //       'recipe desc 2',
  //       'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80',
  //       [
  //         { name: 'eggs', amount: 7 },
  //         { name: 'tomato', amount: 2 },
  //       ]
  //     ),
  //   ];

  private recipesList: Recipe[] = [];

  selectedRecipe: Recipe;

  constructor(
    private slService: ShoppingListService,
    private store: Store<AppState>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipesList = recipes;
    this.recipesChanged.next(this.recipesList.slice());
  }

  getRecipes() {
    return [...this.recipesList];
  }

  getRecipe(index: number) {
    return this.recipesList[index];
  }

  setIngredients(ingredient: Ingredient[]) {
    // this.slService.addIngredients(ingredient);
    this.store.dispatch(new AddIngredients(ingredient));
  }

  addRecipe(recipe: Recipe) {
    this.recipesList.push(recipe);
    this.recipesChanged.next(this.recipesList.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipesList[index] = newRecipe;
    this.recipesChanged.next(this.recipesList.slice());
  }

  deleteRecipe(index: number) {
    this.recipesList.splice(index, 1);
    this.recipesChanged.next(this.recipesList.slice());
  }
}
