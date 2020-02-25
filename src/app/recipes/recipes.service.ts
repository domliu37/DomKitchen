import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Kongbao chicken',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2dVb1PwR5KLYZrC8o0X62ekmoBxlVsz8vaFyyDAanKpux5xJn',
      ingredients: ['Chicken', 'Nuts', 'Vegs', 'Oil']
    },
    {
      id: 'r2',
      title: 'stired fried pork',
      imageUrl: 'https://i.pinimg.com/originals/68/cd/b3/68cdb3c1c32815762eb3a6ddaffe626e.jpg',
      ingredients: ['Pork Meat', 'Carrots', 'Mushrooms', 'Oil']
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
