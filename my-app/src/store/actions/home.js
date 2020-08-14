import * as actionTypes from './actionTypes';

export const fetchCryptoData = () => {
    return {
        type: actionTypes.FETCH_CRYPTO_DATA,
    };
};

export const fetchCryptoDataSuccess = (cryptoData) => {
    return {
        type: actionTypes.FETCH_CRYPTO_DATA_SUCCESS,
        cryptoData: cryptoData
    };
};

export const fetchCryptoDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_CRYPTO_DATA_FAILED,
        error: error
    };
};