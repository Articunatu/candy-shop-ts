import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candy } from '../../models/candy.model';
import { ShoppingCartComponent } from '../../pages/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-candy-card',
  templateUrl: './candy-card.component.html',
  styleUrls: ['./candy-card.component.scss']
})
export class CandyCardComponent {
  @Input() candy!: Candy;
  @Output() candyClick = new EventEmitter<Candy>();

  showAddToCart = false;

  constructor(private shoppingCartComponent: ShoppingCartComponent) {}

  addToCart(): void {
    this.shoppingCartComponent.addToShoppingCart(this.candy);
  }

  // onCardClick(): void {
  //   this.candyClick.emit(this.candy);  
  // }
}
