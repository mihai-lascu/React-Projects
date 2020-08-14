import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from 'axios';

export function* fetchNotesSaga(action) {
    try {
        const response = yield axios.get(`https://react-my-burger-e4a98.firebaseio.com/notes.json?auth=${action.token}`);
        const notes = [];
        for (let key in response.data) {
            notes.push({...response.data[key]});
        };
        yield put(actions.fetchNotesSuccess(notes));
    } catch (error) {
        yield put(actions.fetchNotesFailed(error));
    }
};

export function* saveNotesSaga(action) {
    try {
        yield axios.put(`https://react-my-burger-e4a98.firebaseio.com/notes.json?auth=${action.token}`, action.notes);
        yield put(actions.saveNotesSuccess());
    } catch (error) {
        yield put(actions.saveNotesFailed(error));
    }
};

//const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;