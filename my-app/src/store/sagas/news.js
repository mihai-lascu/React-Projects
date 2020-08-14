import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from 'axios';

export function* fetchCryptoNewsSaga(action) {
    let cryptoNews = [];
    try {
        const response = yield axios.get(`https://data.messari.io/api/v1/news/${action.symbol}`);
        response.data.data.forEach(current => {
            cryptoNews = cryptoNews.concat({
                id: current.id,
                author: current.author.name,
                title: current.title,
                url: current.references[0].url,
                content: current.content
            })
        });
        yield put(actions.fetchCryptoNewsSuccess(cryptoNews));
    } catch (error) {
        yield put(actions.fetchCryptoDataFailed(error));
    }
};