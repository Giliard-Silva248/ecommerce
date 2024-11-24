import { PayloadAction } from '@reduxjs/toolkit';
import { PRODUCTS_LIST, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, LIMIT } from './products-data/DataProducts';

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
    images: string;
    thumbnail: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface ProductState {
    products: Product[];
    cart: CartItem[];
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
            const existingCartItem = state.cart.find(item => item.id === action.payload.id);
            if (existingCartItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            const cartItemToRemove = state.cart.find(item => item.id === action.payload);
            if (cartItemToRemove && cartItemToRemove.quantity > 1) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                };
            }
        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};
