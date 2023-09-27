import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
    new Ingredient('salt', 2),
  ];
  constructor() {}

  ngOnInit() {}

  onClickEmitHandler(payload: Ingredient) {
    const newItem = new Ingredient(payload.name, payload.amount);
    this.ingredients.push(newItem);
  }
}
