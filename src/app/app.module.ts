import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CandyListComponent } from './pages/candy-list/candy-list.component';
import { CandyDetailsComponent } from './pages/candy-details/candy-details.component';
import { NavMenu } from './components/nav-menu/nav-menu.component'; 
import { CandyCardComponent }  from './components/candy-card/candy-card.component';
import { provideHttpClient } from '@angular/common/http'; 
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    CandyListComponent,
    CandyDetailsComponent,
    NavMenu,
    CandyCardComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Include routing module
    FormsModule, 
  ],
  providers: [provideHttpClient()],// add it here

  bootstrap: [AppComponent]
})
export class AppModule { }
