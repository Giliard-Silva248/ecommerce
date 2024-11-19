import { PayloadAction } from '@reduxjs/toolkit';
import { PRODUCTS_LIST, ADD_TO_CART, REMOVE_FROM_CART } from './products-data/DataProducts';

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    reviews: {
        rating: number;
        comment: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    images: string[];
    thumbnail: string;
}

export interface ProductState {
    products: Product[];
    cart: Product[];
}

const initialState: ProductState = {
    products: [],
    cart: []
};

export const productsReducer = (state = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case PRODUCTS_LIST:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload),
            };
        default:
            return state;
    }
};

