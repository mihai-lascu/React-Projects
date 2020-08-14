import { takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchNotesSaga, saveNotesSaga } from './notes';
import { authUserSaga } from './auth';

export function* watchNotes() {
    yield takeLatest(actionTypes.FETCH_NOTES, fetchNotesSaga);
    yield takeLatest(actionTypes.SAVE_NOTES, saveNotesSaga);
}

export function* watchAuth() {
    yield takeLatest(actionTypes.AUTH_START, authUserSaga);
}