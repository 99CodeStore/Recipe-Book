import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShopingListService {
  ingredientListChanged= new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Orange',15)
  ];
  
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient :Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientListChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients :Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientListChanged.emit(this.ingredients.slice());
  }
}

