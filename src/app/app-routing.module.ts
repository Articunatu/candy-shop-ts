import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components for each route
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CandyListComponent } from './pages/candy-list/candy-list.component';
import { CandyDetailsComponent } from './pages/candy-details/candy-details.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'list', component: CandyListComponent },
  { path: 'details', component: CandyDetailsComponent },
  { path: 'order', component: OrderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
