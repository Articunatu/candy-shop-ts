
export interface ApiResponse<TEntity> {
    status: "success" | "error";  
    data: TEntity[];              
    message: string;              
}  

export interface ProductResponseModel {
    id: number,
    name: string, 
    price: number,
    images: ImageResponseModel
    on_sale: boolean,
    stock_quantity: number,
    tags: TagResponseModel[]
}

export interface ProductExtendedResponseModel extends ProductResponseModel {
    description: string
}

export interface ImageResponseModel {
    thumbnail: string,
    large: string
}

export interface TagResponseModel {
    id: number,
    name: string
}

export interface ProductsByTagResponseModel extends TagResponseModel{
    products: ProductResponseModel[]
}

export interface OrderRequestModel {
    id: number;
    first_name: string;
    last_name: string;
    address: string;
    zip_code: string;
    city: string;
    e_mail: string;
    phone_number?: string;
}
