import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { StartEdit } from './store/shopping-list.action';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  //   private igChangesSub: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.slListService.getIngredients();
    // this.igChangesSub = this.slListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    // );
  }

  onEditItem(index: number) {
    // this.slListService.startedEditing.next(index);
    this.store.dispatch(new StartEdit(index));
  }

  ngOnDestroy() {
    // this.igChangesSub.unsubscribe();
  }
}
