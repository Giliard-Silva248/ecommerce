import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const PRODUCTS_LIST = 'PRODUCTS_LIST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const productsList = (products: any) => ({
    type: PRODUCTS_LIST,
    payload: products
});

export const addToCart = (product: any) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=10');
            dispatch(productsList(response.data.products));
        } catch (err) {
            console.error('Erro ao buscar produtos:', err);
        }
    };
};
