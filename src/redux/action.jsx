import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "./constant"
export const addToCart = (data) => {
    console.warn(`action Called`, data)
    return {
        type: Add_To_Cart,
        data
    }
}

export const removeFromCart=(data)=>{
    console.warn(`action Called`,data);
    return{
        type:Remove_From_Cart,
        data
    }
}

export const emptyCart=()=>{
    console.warn(`action called`,);
    return{
        type:Empty_Cart
    }
}