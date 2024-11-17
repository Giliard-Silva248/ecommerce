import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const PRODUCTS_LIST = 'PRODUCTS_LIST';

export const productsList = (products: any) => ({
    type: PRODUCTS_LIST,
    payload: products
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
