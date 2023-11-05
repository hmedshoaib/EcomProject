import { takeEvery, put } from "redux-saga/effects";
import {  createUserAPI, deleteUserAPI, getUserAPI, updateUserAPI } from "../Services";
import { ADD_USER, ADD_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED } from "../Constant"


function* createUserSaga(action) {
    var response = yield createUserAPI(action.payload)
    yield put({ type: ADD_USER_RED, data: response })
}

function* getUserSaga() {
    var response = yield getUserAPI()
    yield put({ type: GET_USER_RED, data: response })
}
function* deleteUserSaga(action) {
    yield deleteUserAPI(action.payload)
    yield put({ type: DELETE_USER_RED, data: action.payload })
}


function* updateUserSaga(action) {
    yield updateUserAPI(action.payload)
    yield put({ type: UPDATE_USER_RED, data: action.payload })
}


export function* userSaga() {
    yield takeEvery(ADD_USER, createUserSaga)
    yield takeEvery(GET_USER, getUserSaga)
    yield takeEvery(DELETE_USER, deleteUserSaga)
    yield takeEvery(UPDATE_USER, updateUserSaga)
}