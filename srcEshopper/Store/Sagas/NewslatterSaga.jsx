import { takeEvery, put } from "redux-saga/effects";
import { createNewslatterAPI, deleteNewslatterAPI, getNewslatterAPI, updateNewslatterAPI } from "../Services";
import { ADD_NEWSLATTER, ADD_NEWSLATTER_RED, DELETE_NEWSLATTER, DELETE_NEWSLATTER_RED, GET_NEWSLATTER, GET_NEWSLATTER_RED, UPDATE_NEWSLATTER, UPDATE_NEWSLATTER_RED } from "../Constant"


function* createNewslatterSaga(action) {
    var response = yield createNewslatterAPI(action.payload)
    yield put({ type: ADD_NEWSLATTER_RED, data: response })
}

function* getNewslatterSaga() {
    var response = yield getNewslatterAPI()
    yield put({ type: GET_NEWSLATTER_RED, data: response })
}
function* deleteNewslatterSaga(action) {
    yield deleteNewslatterAPI(action.payload)
    yield put({ type: DELETE_NEWSLATTER_RED, data: action.payload })
}


function* updateNewslatterSaga(action) {
    yield updateNewslatterAPI(action.payload)
    yield put({ type: UPDATE_NEWSLATTER_RED, data: action.payload })
}


export function* newslatterSaga() {
    yield takeEvery(ADD_NEWSLATTER, createNewslatterSaga)
    yield takeEvery(GET_NEWSLATTER, getNewslatterSaga)
    yield takeEvery(DELETE_NEWSLATTER, deleteNewslatterSaga)
    yield takeEvery(UPDATE_NEWSLATTER, updateNewslatterSaga)
}