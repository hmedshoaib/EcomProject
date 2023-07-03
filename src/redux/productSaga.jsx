import { takeEvery,put } from "redux-saga/effects"
import { Product_List, Set_Product_List, search_product } from "./constant"


function* getProducts() {
    let data = yield fetch(`http://localhost:8000/product`)
    data = yield data.json()
    yield put({type:Set_Product_List,data:data})
}


function* searchProducts(data) {
    let result = yield fetch(`http://localhost:8000/product?q=${data.query}`)
    result = yield result.json()
    yield put({type:Set_Product_List,data:result})
}



function* productSaga() {
    yield takeEvery(Product_List, getProducts)
    yield takeEvery(search_product,searchProducts)
}

export default productSaga