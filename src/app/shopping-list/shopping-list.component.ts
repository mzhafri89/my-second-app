import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Ing Name 1', 5),
    new Ingredient('Ing Name 2', 15)
  ];

  constructor() { }

  ngOnInit() {
  }

}
