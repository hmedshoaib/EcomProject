import { takeEvery, put } from "redux-saga/effects";
import { createProductAPI, deleteProductAPI, getProductAPI, updateProductAPI } from "../Services";
import { ADD_PRODUCT, ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant"


function* createProductSaga(action) {
    var response = yield createProductAPI(action.payload)
    yield put({ type: ADD_PRODUCT_RED, data: response })
}

function* getProductSaga() {
    var response = yield getProductAPI()
    yield put({ type: GET_PRODUCT_RED, data: response })
}
function* deleteProductSaga(action) {
    yield deleteProductAPI(action.payload)
    yield put({ type: DELETE_PRODUCT_RED, data: action.payload })
}


function* updateProductSaga(action) {
    yield updateProductAPI(action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, data: action.payload })
}


export function*productSaga() {
    yield takeEvery(ADD_PRODUCT, createProductSaga)
    yield takeEvery(GET_PRODUCT, getProductSaga)
    yield takeEvery(DELETE_PRODUCT, deleteProductSaga)
    yield takeEvery(UPDATE_PRODUCT, updateProductSaga)
}