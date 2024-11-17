import { PayloadAction } from '@reduxjs/toolkit';
import { PRODUCTS_LIST } from './products-data/DataProducts';

interface Products{
    id: number,
    title: string,
    price:number,
    description: string,
    category: string,
    image: string,
    rating: {
    rate: number,
    count: number
    }
}

interface ProductState { products: Products[]}

const inicialState: ProductState = {
    products: []
}


export const productsReducer = (state = inicialState, action:PayloadAction<Products[]>)=>{
    switch(action.type){
        case PRODUCTS_LIST:
            return{
                ...state,
                products: action.payload,
            }
        default:
            return state
    }

}