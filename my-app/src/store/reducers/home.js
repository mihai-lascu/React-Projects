import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cryptoData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CRYPTO_DATA_SUCCESS:
            return {
                ...state,
                cryptoData: action.cryptoData
            }
        case actionTypes.FETCH_CRYPTO_DATA_FAILED:
            return {
                ...state
            }
        default:
            return state;
    };
};

export default reducer;