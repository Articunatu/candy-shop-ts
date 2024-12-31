import { ProductResponseModel, TagResponseModel, ProductsByTagResponseModel, ProductExtendedResponseModel } from "./response-models";
import { Candy, CandyExtended } from "../models/candy.model";
import { CandyList } from "../models/view-models/candy-list";
import { Category } from "../models/category.model";

function mapApiToCandyBase(productModel: ProductResponseModel): Candy {
    return {
        id: productModel.id,
        title: productModel.name,
        price: productModel.price,
        imageThumbnailUrl: process.env['BASE_URL'] + productModel.images.thumbnail,
        isOnSale: productModel.on_sale,
        inStock: productModel.stock_quantity,
        categories: productModel.tags.map(tag => ({
            id: tag.id,
            title: tag.name
        }))
    };
}

export function mapApiResponseToCandy(productModel: ProductResponseModel[]): Candy[] {
    return productModel.map(product => ({
        ...mapApiToCandyBase(product)
    }));
}

export function mapApiResponseToCandyExtended(productModel: ProductExtendedResponseModel): CandyExtended {
    return {
        ...mapApiToCandyBase(productModel),
        description: productModel.description, 
        imageUrl: process.env['BASE_URL'] + productModel.images.large
    };
}

function mapApiResponseToCategory(apiData: Omit<TagResponseModel, 'products'>): Category {
    return {
        id: apiData.id,
        title: apiData.name,
    };
}

export function mapApiResponseToCategories(apiData: TagResponseModel[]): Category[] {
    return apiData.map(tag => mapApiResponseToCategory(tag)); 
}

export function mapApiResponseToCandiesByCategory(apiData: ProductsByTagResponseModel): CandyList {
    return {
        candies: mapApiResponseToCandy(apiData.products),
        currentCategory: mapApiResponseToCategory(apiData)
    };
}
