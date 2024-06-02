import { Basket } from "../models/basket";


export function getBasketFromLocalStorage():Basket | null{
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket){
        try{
            const parsedBasket: Basket = JSON.parse(storedBasket);
            return parsedBasket;
        }
        catch(error){
            console.error('Error Parsing basket from local storage: ', error);
            return null;
        }
    }
    return null;
}