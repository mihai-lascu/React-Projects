import * as actionTypes from './actionTypes';

export const toggleAuthForm = () => {
    return {
        type: actionTypes.TOGGLE_AUTH_FORM
    }
}

export const authStart = (email, password, isSignup) => {
    return {
        type: actionTypes.AUTH_START,
        email: email,
        password: password,
        isSignup: isSignup
    };
};

export const authSuccess = (token, userId, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        email: email
    };
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};