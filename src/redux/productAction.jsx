

import { Product_List, search_product } from "./constant"
export const productList = () => {
    return {
        type: Product_List,
    }
}

export const searchProduct = (query)=>{
    return{
        type:search_product,
        query,
    }
}

