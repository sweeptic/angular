import { Ingredient } from '../shared/ingredient-model';

const initialState = {
  ingredients: [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
    new Ingredient('salt', 2),
  ],
};

export function shoppingListReducer(state = initialState, action) {}
