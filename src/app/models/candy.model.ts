import { Category } from "./category.model";

export interface Candy {
    id: number;
    title: string;
    price: number;
    imageThumbnailUrl: string;
    isOnSale: boolean;
    inStock: number;
    categories: Category[];
}

export interface CandyExtended extends Omit<Candy, "imageThumbnailUrl"> {
    description: string;
    imageUrl: string;
}
