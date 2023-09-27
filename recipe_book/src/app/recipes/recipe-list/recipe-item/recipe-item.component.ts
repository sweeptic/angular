import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter<void>(); // NEM LEHET 'EVENT' VEGZODESU A NEVE

  onSelected() {
    this.recipeSelected.emit();
  }
}
