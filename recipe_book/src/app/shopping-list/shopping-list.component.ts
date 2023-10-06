import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[];
  private igChangesSub: Subscription;

  constructor(private slListService: ShoppingListService) {}

  ngOnInit() {
    console.log('init');

    this.ingredients = this.slListService.getIngredients();
    this.igChangesSub = this.slListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    );
  }

  ngOnDestroy() {
    this.igChangesSub.unsubscribe();
  }
}
