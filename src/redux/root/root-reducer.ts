import { combineReducers } from "@reduxjs/toolkit";
import {productsReducer} from "../reducer"; 

export const rootReducer = combineReducers({
    products: productsReducer
});
