import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from 'axios';

export function* authUserSaga(action) {
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqPBz84aMChEQRB3TsxC91FQpnXVQ65LI';
    if (!action.isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqPBz84aMChEQRB3TsxC91FQpnXVQ65LI';
    };
    
    try {
        const response = yield axios.post(url, authData);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId, response.data.email));
    } catch (error) {
        yield put(actions.authFailed(error.response.data.error));
    }
}