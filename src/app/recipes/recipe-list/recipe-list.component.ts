import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  repices : Recipe[] = [
    new Recipe('Samosa','समोसा एक तला हुआ या बेक किया हुआ भरवां अल्पाहार व्यंजन है। इसमें प्रायः मसालेदार भुने या पके हुए सूखे आलू, या इसके अलावा मटर, प्याज, दाल, कहीम कहीं मांसा भी भरा हो सकता है। इसका आकार प्रायः तिकोना होता है किन्तु आकार और नाप भिन्न-भिन्न स्थानों पर बदल सकता है। अधिकतर ये चटनी के संग परोसे जाते हैं।','https://static.langimg.com/thumb/msid-76956747,width-680,resizemode-3/navbharat-times.jpg')
  ] ;
  ngOnInit(): void {
  }

}
