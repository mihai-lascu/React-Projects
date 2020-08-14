import * as actionTypes from './actionTypes';

export const fetchCryptoNews = (symbol) => {
    return {
        type: actionTypes.FETCH_CRYPTO_NEWS,
        symbol: symbol
    };
};

export const fetchCryptoNewsSuccess = (cryptoNews) => {
    return {
        type: actionTypes.FETCH_CRYPTO_NEWS_SUCCESS,
        cryptoNews: cryptoNews
    };
};

export const fetchCryptoNewsFailed = (error) => {
    return {
        type: actionTypes.FETCH_CRYPTO_NEWS_FAILED,
        error: error
    };
};