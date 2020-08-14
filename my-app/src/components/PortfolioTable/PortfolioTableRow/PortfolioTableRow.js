import React from 'react';

const PortfolioTableRow = (props) => (
    <tr>
        <td><button onClick={props.editCoin}>edit</button></td>
        <td>{props.coinName}</td>
        <td>{props.coinAmount} {props.coinSymbol}</td>
        <td>{props.sumInvested} $</td>
        <td>10000 $</td>
        <td>2500 $</td>
        <td>20000 $</td>
        <td><button onClick={props.deleteCoin}>del</button></td>
    </tr>
);

export default PortfolioTableRow;