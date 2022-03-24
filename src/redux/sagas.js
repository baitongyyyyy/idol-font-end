import { takeEvery, call, put } from "redux-saga/effects";
import { actionTypes } from './actions';
import helper from './helper';

export default function* watcherSaga() {
  yield takeEvery(actionTypes.LOG_IN, loginSaga);
  yield takeEvery(actionTypes.MODAL_ADD, addModalSaga);
  yield takeEvery(actionTypes.MODAL_SALE, saleModalSaga);

  yield takeEvery(actionTypes.CHECK_LOGIN, checkLoginSaga);
}

function* loginSaga(payload) {
  try {
    let saveData = Object.assign({}, {}, payload.payload);
    // saveData.token = helper.encryptData(payload.payload.accessToken)
    helper.storageSave("login", saveData);
    yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: saveData });
  } catch (e) {
    yield put({ type: actionTypes.FAILURE, payload: e });
  }
}


function* addModalSaga(payload) {
  try {
    yield put({ payload });
  } catch (e) {
    yield put({ type: actionTypes.FAILURE, payload: e });
  }
}

function* saleModalSaga(payload) {
  try {
    yield put({ payload });
  } catch (e) {
    yield put({ type: actionTypes.FAILURE, payload: e });
  }
}

function* checkLoginSaga() {
  try {
    const items = helper.storageGet("login");
    // console.log('items',items)
    if (items) {
      yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: items });
    }
  } catch (e) {
    yield put({ type: actionTypes.FAILURE, payload: e });
  }
}