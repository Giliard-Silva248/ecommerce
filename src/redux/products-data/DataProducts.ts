import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"


export const PRODUCTS_LIST = 'PRODUCTS_LIST' 

export const productsList = (products: any) =>({
    type: PRODUCTS_LIST,
    payload: products
})

export const DataProducts = () =>{


    return async (dispatch: Dispatch)=>{
       
           try{
               const response = await axios.get('https://fakestoreapi.com/products?limit=5')     
               dispatch(productsList(response.data))
           } catch(err){
               console.log('deu errado!!' , err);
               
           }
       }

   

}