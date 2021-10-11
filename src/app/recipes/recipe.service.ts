import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable( )
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor( private slService:ShopingListService) { }

  private repices : Recipe[] = [
    new Recipe('Samosa',
    'समोसा एक तला हुआ या बेक किया हुआ भरवां अल्पाहार व्यंजन है। इसमें प्रायः मसालेदार भुने या पके हुए सूखे आलू, या इसके अलावा मटर, प्याज, दाल, कहीम कहीं मांसा भी भरा हो सकता है। इसका आकार प्रायः तिकोना होता है किन्तु आकार और नाप भिन्न-भिन्न स्थानों पर बदल सकता है। अधिकतर ये चटनी के संग परोसे जाते हैं।',
    'https://static.langimg.com/thumb/msid-76956747,width-680,resizemode-3/navbharat-times.jpg',
    [
      new Ingredient("पके सूखे आलू",5),
      new Ingredient('मटर',2) ,
      new Ingredient('प्याज',2) ,
      new Ingredient('दाल',2) ,
      new Ingredient('चटनी ',3)
    ]),
    new Recipe('जलेबी',
    'जलेबी उत्तर भारत, पाकिस्तान व मध्यपूर्व का एक लोकप्रिय व्यंजन है। इसका आकार पेंचदार होता है और स्वाद करारा मीठा। इस मिठाई की धूम भारतीय उपमहाद्वीप से शुरू होकर पश्चिमी देश स्पेन तक जाती है। इस बीच भारत, बांग्लादेश, पाकिस्तान, ईरान के साथ तमाम अरब मुल्कों में भी यह खूब जानी-पहचानी है।',
    'https://punampaul.com/wp-content/uploads/2019/10/Jalebi-Recipe.jpg',[]),
    new Recipe('पकोड़ा',
    'पकोड़ा एक पंजाबी व्यंजन है। यह अनेक प्रकार से बनाया जाता है, अनेक प्रकार की सब्जियों से बना कर मौसम अनुसार विभिन्न प्रकार की चटनियों के साथ खाया जाता है।',
    'https://i.ytimg.com/vi/F_LGgHg5bo0/maxresdefault.jpg',[])
  ] ;

  getRecipes(){
    return this.repices.slice();
  }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}
