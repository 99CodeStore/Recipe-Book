import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model'
import { ShopingListService } from './shopping-list.service';
 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService:ShopingListService) { }
  ingredients : Ingredient[];
  
  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientListChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
    });
  }
}
