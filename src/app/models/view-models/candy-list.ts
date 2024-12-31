import { Candy } from "../candy.model"
import { Category } from "../category.model"

export interface CandyList {
    candies : Candy[],
    currentCategory : Category
}

// (Candy[] | string)