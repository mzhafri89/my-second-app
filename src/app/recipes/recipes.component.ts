import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {

  rspInfo: Recipes;

  constructor() { }

  ngOnInit() {
  }

}
