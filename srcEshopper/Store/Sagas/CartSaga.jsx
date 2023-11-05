import { takeEvery, put } from "redux-saga/effects";
import { createCartAPI, deleteCartAPI, getCartAPI, updateCartAPI } from "../Services";
import { ADD_CART, ADD_CART_RED, DELETE_CART, DELETE_CART_RED, GET_CART, GET_CART_RED, UPDATE_CART, UPDATE_CART_RED } from "../Constant"


function* createCartSaga(action) {
    var response = yield createCartAPI(action.payload)
    yield put({ type: ADD_CART_RED, data: response })
}

function* getCartSaga() {
    var response = yield getCartAPI()
    yield put({ type: GET_CART_RED, data: response })
}
function* deleteCartSaga(action) {
    yield deleteCartAPI(action.payload)
    yield put({ type: DELETE_CART_RED, data: action.payload })
}


function* updateCartSaga(action) {
    yield updateCartAPI(action.payload)
    yield put({ type: UPDATE_CART_RED, data: action.payload })
}


export function* cartSaga() {
    yield takeEvery(ADD_CART, createCartSaga)
    yield takeEvery(GET_CART, getCartSaga)
    yield takeEvery(DELETE_CART, deleteCartSaga)
    yield takeEvery(UPDATE_CART, updateCartSaga)
}