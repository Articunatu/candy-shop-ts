import { Component } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart.model';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
})
export class ShoppingCartSummaryComponent {
  shoppingCart: ShoppingCart = {
    id: "",
    shoppingCartItems: []
  };

  itemsCount = this.shoppingCart.shoppingCartItems.length;
}
