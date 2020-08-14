import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from 'axios';

export function* fetchCryptoDataSaga(action) {
    let cryptoData = [];
    try {
        const response = yield axios.get('https://data.messari.io/api/v1/assets');
        response.data.data.forEach(current => {
            cryptoData = cryptoData.concat({
                id: current.id,
                name: current.name,
                marketCap: current.metrics.marketcap.current_marketcap_usd,
                price: current.metrics.market_data.price_usd,
                volume: current.metrics.market_data.real_volume_last_24_hours,
                symbol: current.symbol,
                supply: current.metrics.supply.circulating,
                background: current.profile.background,
                overview: current.profile.overview,
                resources: current.profile.relevant_resources,
                tagline: current.profile.tagline,
                technology: current.profile.technology
            })
        });
        console.log(cryptoData);
        yield put(actions.fetchCryptoDataSuccess(cryptoData));
    } catch (error) {
        yield put(actions.fetchCryptoDataFailed(error));
    }
};