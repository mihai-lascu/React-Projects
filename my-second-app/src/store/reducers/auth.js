import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    showForm: false,
    token: null,
    userId: null,
    email: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_AUTH_FORM:
            return {
                ...state,
                showForm: !state.showForm
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                token: action.idToken,
                userId: action.userId,
                email: action.email
            }
        case actionTypes.AUTH_FAILED:
            alert(action.error);
            return {
                ...state
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                token: null,
                userId: null,
                email: ''
            }
        default:
            return state;
    };
};

export default reducer;