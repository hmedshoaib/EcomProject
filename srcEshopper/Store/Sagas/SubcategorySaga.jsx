import { takeEvery, put } from "redux-saga/effects";
import { createSubcategoryAPI, deleteSubcategoryAPI, getSubcategoryAPI, updateSubcategoryAPI } from "../Services";
import { ADD_SUBCATEGORY, ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constant"


function* createSubcategorySaga(action) {
    var response = yield createSubcategoryAPI(action.payload)
    yield put({ type: ADD_SUBCATEGORY_RED, data: response })
}

function* getSubcategorySaga() {
    var response = yield getSubcategoryAPI()
    yield put({ type: GET_SUBCATEGORY_RED, data: response })
}
function* deleteSubcategorySaga(action) {
    yield deleteSubcategoryAPI(action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, data: action.payload })
}


function* updateSubcategorySaga(action) {
    yield updateSubcategoryAPI(action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, data: action.payload })
}


export function* SubcategorySaga() {
    yield takeEvery(ADD_SUBCATEGORY, createSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY, getSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY, deleteSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY, updateSubcategorySaga)
}