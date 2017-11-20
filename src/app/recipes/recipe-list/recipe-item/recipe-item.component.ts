import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipes;
  @Output() selectedRecipe =  new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.selectedRecipe.emit();
  }

}
