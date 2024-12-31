import { Component } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  user: Order = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: '',
    eMail: '',
    phoneNumber: ''
  };

  onSubmit(): void {
    console.log('Form submitted', this.user);
  }

  // checkOut(): void {
  //   // Simulate the checkout process
  //   this.service.add('checkout', this.shoppingCart).subscribe(response => {
  //     if (response.status === 'success') {
  //       alert('Checkout successful');
  //       this.clearCart(); // Clear cart after successful checkout
  //     } else {
  //       alert('Checkout failed');
  //     }
  //   });
  // }

  // clearCart(): void {
  //   // Clear the shopping cart and its timestamp from localStorage
  //   this.shoppingCart = { id: '', shoppingCartItems: [] };
  //   localStorage.removeItem(CART_STORAGE_KEY);
  //   localStorage.removeItem(CART_TIMESTAMP_KEY);
  //   this.shoppingCartTotal = 0;
  // }
}
