import React from 'react';
import { connect } from 'react-redux';

import './CryptoTable.css';
import TableRow from './TableRow/TableRow';

const cryptoTable = (props) => {

    let tableRows = null;
    let nr = 0;

    if (props.cryptoData) {
        tableRows = props.cryptoData.map(crypto => {
            nr += 1;
            return (
                <TableRow
                    nr={nr}
                    key={crypto.id}
                    name={crypto.name}
                    marketCap={`$${crypto.marketCap.toLocaleString()}`}
                    price={`$${crypto.price.toLocaleString()}`}
                    volume={crypto.volume ? `$${crypto.volume.toLocaleString()}` : 'no data'}
                    symbol={crypto.symbol.toUpperCase()}
                    supply={crypto.supply.toLocaleString()}
                />
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume (24h)</th>
                        <th>Circulating Supply</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cryptoData: state.crypto.cryptoData
    }
}

export default connect(mapStateToProps)(cryptoTable);
