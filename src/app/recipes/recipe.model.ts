export class Recipe
{
 public name : string;
 public description : string;
 public imageUrl : string;
 constructor(name : string , desc :string ,imgPath : string)
 {
    this.name=name;
    this.description=desc;
    this.imageUrl=imgPath;
 }
}