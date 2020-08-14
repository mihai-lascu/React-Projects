import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cryptoNews: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CRYPTO_NEWS_SUCCESS:
            return {
                cryptoNews: action.cryptoNews
            }
        case actionTypes.FETCH_CRYPTO_NEWS_FAILED:
            return {
                ...state
            }
        default:
            return state;
    };
};

export default reducer;