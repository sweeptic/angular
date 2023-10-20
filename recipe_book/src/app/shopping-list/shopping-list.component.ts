import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  //   private igChangesSub: Subscription;

  constructor(
    private slListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.slListService.getIngredients();
    // this.igChangesSub = this.slListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    // );
  }

  onEditItem(index: number) {
    this.slListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    // this.igChangesSub.unsubscribe();
  }
}
