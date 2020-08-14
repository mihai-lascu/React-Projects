import React, { Component } from 'react';
import axios from 'axios';

import classes from './ProfitCalculator.module.css';

export class ProfitCalculator extends Component {

    state = {
        symbol: '',
        coinAmount: 0,
        invested: 0,
        price: null
    }

    getCoinPrice = () => {
        let decimals = 2;
        if (this.state.symbol !== '') {
            axios.get(`https://data.messari.io/api/v1/assets/${this.state.symbol}/metrics`)
                .then(response => {
                    if (response.data.data.market_data.price_usd < 1) {
                        decimals = 4
                    }
                    this.setState({ price: response.data.data.market_data.price_usd.toFixed(decimals) });
                })
                .catch(error => alert(`Symbol ${this.state.symbol} not in database`));
        }
        else {
            alert('Please enter coin symbol');
        }
    }

    changeSymbolHandler = (event) => {
        this.setState({ symbol: event.target.value, price: null });
    }

    changeCoinAmountHandler = (event) => {
        this.setState({ coinAmount: event.target.value });
    }

    changeAmountInvested = (event) => {
        this.setState({ invested: event.target.value });
    }

    render() {
        let price = <button onClick={this.getCoinPrice}>Get {this.state.symbol} price</button>;

        if (this.state.price) price = <p>Current price: ${this.state.price}</p>;

        return (
            <div className={classes.Calculator}>
                <label>Symbol: </label>
                <input
                    type='text'
                    placeholder='Enter coin symbol'
                    onChange={this.changeSymbolHandler}
                /><br /><br />
                <label>Coin Amount: </label>
                <input
                    type='number'
                    placeholder='Enter coin amount'
                    onChange={this.changeCoinAmountHandler}
                /><br /><br />
                <label>$ Invested: </label>
                <input
                    type='number'
                    placeholder='Enter $ invested'
                    onChange={this.changeAmountInvested}
                /><br /><br />
                {price}
                <p>Break-even price: ${(this.state.invested / this.state.coinAmount).toFixed(2)}</p>
                <p>Worth: ${(this.state.coinAmount * this.state.price).toFixed(2)}</p>
                <p>Profit: ${((this.state.coinAmount * this.state.price) - this.state.invested).toFixed(2)}</p>
            </div>
        )
    }
}

export default ProfitCalculator;
