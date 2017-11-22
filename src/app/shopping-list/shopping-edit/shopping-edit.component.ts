import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {

  //  @ViewChild('nameInput') nameInputRef: ElementRef;
  //  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  private nameInput = '';
  private amountInput = 0;

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // const ingNmae = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
     const ingObj = new Ingredient(this.nameInput, this.amountInput);
    // console.log(ingObj);
    this.ingredientAdded.emit(ingObj);
  }

}
