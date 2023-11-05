import { takeEvery, put } from "redux-saga/effects";
import { createMaincategoryAPI, deleteMaincategoryAPI, getMaincategoryAPI, updateMaincategoryAPI } from "../Services";
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant"


function* createMaincategorySaga(action) {
    var response = yield createMaincategoryAPI(action.payload)
    yield put({ type: ADD_MAINCATEGORY_RED, data: response })
}

function* getMaincategorySaga() {
    var response = yield getMaincategoryAPI()
    yield put({ type: GET_MAINCATEGORY_RED, data: response })
}
function* deleteMaincategorySaga(action) {
    yield deleteMaincategoryAPI(action.payload)
    yield put({ type: DELETE_MAINCATEGORY_RED, data: action.payload })
}


function* updateMaincategorySaga(action) {
    yield updateMaincategoryAPI(action.payload)
    yield put({ type: UPDATE_MAINCATEGORY_RED, data: action.payload })
}


export function* maincategorySaga() {
    yield takeEvery(ADD_MAINCATEGORY, createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY, getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY, deleteMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY, updateMaincategorySaga)
}