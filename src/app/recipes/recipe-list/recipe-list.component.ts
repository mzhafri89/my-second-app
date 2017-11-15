import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('Recipe Name 1', 'Recipe Desc 1',
    'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
