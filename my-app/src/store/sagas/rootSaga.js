import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchCryptoDataSaga } from './home';
import { fetchCryptoNewsSaga } from './news';

export function* watchHome() {
    yield takeEvery(actionTypes.FETCH_CRYPTO_DATA, fetchCryptoDataSaga);
}

export function* watchNews() {
    yield takeEvery(actionTypes.FETCH_CRYPTO_NEWS, fetchCryptoNewsSaga);
}