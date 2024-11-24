import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../reducer";

export const PRODUCTS_LIST = 'PRODUCTS_LIST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';

export const productsList = (products: Product[]) => ({
    type: PRODUCTS_LIST,
    payload: products
});

export const addToCart = (product: Product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const removeAllFromCart = (productId: number) => ({
    type: REMOVE_ALL_FROM_CART,
    payload: productId
});

export let LIMIT = 10;

export const more = () => (dispatch: Dispatch<any>) => {
    LIMIT+=10;
    dispatch(fetchProducts());
};

export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=${LIMIT}`);
            dispatch(productsList(response.data.products));
        } catch (err) {
            console.error('Erro ao buscar produtos:', err);
        }
    };
};
