import { Set_Product_List } from "./constant"
export const productData = (data = [], action) => {
    switch (action.type) {
        case Set_Product_List:
            console.warn(action);
            return [...action.data]
        default:
            //No Case matched
            return data
    }
}