import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "./constant"
export const cartData = (data = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            //Add to cart logic.
            console.warn(`Add_To_Cart Condition`, action)
            return [action.data, ...data]
        case Remove_From_Cart:
            //Add to cart logic
            console.warn(`Remove_From_Cart Condition`, action);
            // data.length = data.length ? data.length - 1 : []
            const remainingItem = data.filter((item)=>item.id!==action.data)
            return [...remainingItem]
        case Empty_Cart:
            console.warn(`Empty_Cart_Condition`, action);
            data = []
            return [...data]
        default:
            //No Case matched
            return data
    }
}