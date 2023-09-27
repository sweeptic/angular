import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'recipe desc',
      'https://plus.unsplash.com/premium_photo-1661587759162-d2dd4934ce33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    ),
    new Recipe(
      'test recipe 2 ',
      'recipe desc 2',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    console.log('emit 2');

    this.recipeWasSelected.emit(recipe);
  }
}
