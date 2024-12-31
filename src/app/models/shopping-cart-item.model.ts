import { Candy } from "./candy.model"

export interface ShoppingCartItem {
    candyId: number;
    quantity: number;
    price: number;
    total: number;
}
