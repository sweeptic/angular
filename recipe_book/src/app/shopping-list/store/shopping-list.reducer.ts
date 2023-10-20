import { Ingredient } from '../../shared/ingredient-model';
import * as ShoppingListActions from './shopping-list.action';

const initialState = {
  ingredients: [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
    new Ingredient('salt', 2),
  ],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        Ingredients: [...state.ingredients, ...action.payload],
      };

    default:
      return state;
  }
}
