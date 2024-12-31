import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart.model';
import { Candy } from '../../models/candy.model';
import { GenericService } from '../../services/generic.service';
import { ShoppingCartItem } from '../../models/shopping-cart-item.model';

const CART_STORAGE_KEY = 'shoppingCart';
const CART_TIMESTAMP_KEY = 'cartTimestamp';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartTotal = 0;
  shoppingCart: ShoppingCart = {
    id: '',
    shoppingCartItems: []
  };

  ngOnInit(): void {
    this.loadShoppingCart();
  }

  loadShoppingCart(): void {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    const cartTimestamp = localStorage.getItem(CART_TIMESTAMP_KEY);

    if (cartData && cartTimestamp) {
      const storedTime = new Date(Number(cartTimestamp));
      const now = new Date();

      if (now.getTime() - storedTime.getTime() > 24 * 60 * 60 * 1000) {
      } else {
        this.shoppingCart = JSON.parse(cartData);
        this.calculateTotal();
      }
    }
  }

  addToShoppingCart(candy: Candy): void {
    const existingItem = this.shoppingCart.shoppingCartItems.find(cartItem => cartItem.candyId === candy.id);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      this.shoppingCart.shoppingCartItems.push({
        candyId: candy.id,
        quantity: 1,
        price: candy.price,
        total: candy.price 
      });
    }

    this.updateShoppingCart();
  }

  removeFromShoppingCart(candyId: number): void {
    const index = this.shoppingCart.shoppingCartItems.findIndex(item => item.candyId === candyId);
    if (index !== -1) {
      const item = this.shoppingCart.shoppingCartItems[index];
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.quantity * item.price;
      } else {
        this.shoppingCart.shoppingCartItems.splice(index, 1);
      }
    }

    this.updateShoppingCart();
  }

  updateShoppingCart(): void {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.shoppingCart));
    localStorage.setItem(CART_TIMESTAMP_KEY, new Date().getTime().toString());
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.shoppingCartTotal = this.shoppingCart.shoppingCartItems.reduce((total, item) => total + item.total, 0);
  }

  getCandyTitle(candyId: number): string {
    const candy = this.getCandyById(candyId);
    return candy ? candy.title : 'Unknown Candy';
  }

  getCandyPrice(candyId: number): number {
    const candy = this.getCandyById(candyId);
    return candy ? candy.price : 0;
  }

  getCandyById(candyId: number): Candy | undefined {
    return this.shoppingCart.shoppingCartItems.find(item => item.candyId === candyId) as any;
  }
}
