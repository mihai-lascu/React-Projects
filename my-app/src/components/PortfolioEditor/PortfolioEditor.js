import React, { Fragment, useState } from 'react';

import classes from './PortfolioEditor.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';

const PortfolioEditor = (props) => {
    const [userInput, setUserInput] = useState({
        coinId: `_${Math.random().toString(36).substr(2, 9)}`,
        coinName: '',
        coinSymbol: '',
        coinAmount: '',
        sumInvested: ''
    });

    const inputChangedHandler = (event, type) => {
        let newUserInput = { ...userInput };
        switch (type) {
            case 'name':
                newUserInput.coinName = event.target.value;
                setUserInput(newUserInput);
                break;
            case 'symbol':
                newUserInput.coinSymbol = event.target.value;
                setUserInput(newUserInput);
                break;
            case 'amount':
                newUserInput.coinAmount = event.target.value;
                setUserInput(newUserInput);
                break;
            case 'invested':
                newUserInput.sumInvested = event.target.value;
                setUserInput(newUserInput);
                break;
            default:
                break;
        };
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (props.editorMode === 'add') {
            props.addCoin(props.portfolioToEdit, userInput);
        } else {
            console.log('edit mode');
        }
        props.toggleEditor();
    }

    let form = (
        <form onSubmit={submitHandler} className={classes.Editor}>
            <label>Name: </label>
            <input
                type='text'
                placeholder='Coin name...'
                value={userInput.coinName}
                onChange={(event) => inputChangedHandler(event, 'name')}
            /><br /><br />
            <label>Symbol: </label>
            <input
                type='text'
                placeholder='Coin symbol...'
                value={userInput.coinSymbol}
                onChange={(event) => inputChangedHandler(event, 'symbol')}
            /><br /><br />
            <label>Coin Amount: </label>
            <input
                type='number'
                placeholder='Coin amount...'
                value={userInput.coinAmount}
                onChange={(event) => inputChangedHandler(event, 'amount')}
            /><br /><br />
            <label>$ Invested: </label>
            <input
                type='number'
                placeholder='$ invested...'
                value={userInput.sumInvested}
                onChange={(event) => inputChangedHandler(event, 'invested')}
            /><br /><br />
            <div className={classes.Button}>
                <button >Submit</button>
            </div>
        </form>
    );

    return (
        <Fragment>
            <Backdrop show={props.showEditor} clicked={props.toggleEditor} />
            <div
                className={classes.PortfolioEditor}
                style={{
                    transform: props.showEditor ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showEditor ? '1' : '0'
                }}>
                {form}
            </div>
        </Fragment>
    )
}

export default PortfolioEditor;