import { PayloadAction } from '@reduxjs/toolkit';
import { PRODUCTS_LIST } from './products-data/DataProducts';

export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: [
    string,
    string
    ],
    brand: string,
    reviews: [
        {
            rating: number,
            comment: string,
            reviewerName: string,
            reviewerEmail: string
        },
        {
            rating:number,
            comment: string,
            reviewerName: string,
            reviewerEmail:string
        },
        {
            rating: number,
            comment: string,
            reviewerName: string,
            reviewerEmail: string
        }
    ],
    returnPolicy: string,
    images: [
        string
    ],
    thumbnail: string
}

export interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: []
};

const productsReducer = (state = initialState, action: PayloadAction<Product[]>) => {
    switch (action.type) {
        case PRODUCTS_LIST:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productsReducer;
