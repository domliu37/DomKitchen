import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: '宫保鸡丁',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2dVb1PwR5KLYZrC8o0X62ekmoBxlVsz8vaFyyDAanKpux5xJn',
      ingredients: ['鸡肉', '花生', '青红椒', '食用油']
    },
    {
      id: 'r2',
      title: '鱼香肉丝',
      imageUrl: 'https://i.pinimg.com/originals/68/cd/b3/68cdb3c1c32815762eb3a6ddaffe626e.jpg',
      ingredients: ['猪肉', '胡萝卜', '木耳', '食用油']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(reciptId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== reciptId;
    });

  }
}
