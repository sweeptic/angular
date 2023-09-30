import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[];
  constructor(private slListService: ShoppingListService) {}

  ngOnInit() {
    console.log('init');

    this.ingredients = this.slListService.getIngredients();
    this.slListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    );
  }
}
