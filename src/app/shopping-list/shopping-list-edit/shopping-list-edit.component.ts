import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef :ElementRef;
  @ViewChild('amountInput') amountInputRef :ElementRef;

  @Output() ingredientAddedd= new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onAdditem()
  {
      const ingName=this.nameInputRef.nativeElement.value;
      const ingAmount=this.amountInputRef.nativeElement.value;
      const newIngredient=new Ingredient(ingName,ingAmount);
      this.ingredientAddedd.emit(newIngredient);
  }

}
