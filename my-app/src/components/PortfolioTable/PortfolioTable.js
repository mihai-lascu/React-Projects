import React from 'react';

import './PortfolioTable.module.css';
import PortfolioTableRow from './PortfolioTableRow/PortfolioTableRow';

const PortfolioTable = (props) => {

    let rows = null;
    rows = props.portfolio.coins.map(coin => (
        <PortfolioTableRow
            key={coin.coinId}
            coinName={coin.coinName}
            coinSymbol={coin.coinSymbol}
            coinAmount={coin.coinAmount}
            sumInvested={coin.sumInvested}
            deleteCoin={() => props.deleteCoin(props.portfolio.portfolioId, coin.coinId)}
            editCoin={() => props.editCoin('edit')}
        />
    ));

    return (
        <div>
            <h3>My portfolio</h3>
            <table>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Name</th>
                        <th>Coin amount</th>
                        <th>Amount invested $</th>
                        <th>Price</th>
                        <th>Break-even price</th>
                        <th>Current Value</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <button onClick={props.addCoin}>+</button>
        </div>
    )
}

export default PortfolioTable;
