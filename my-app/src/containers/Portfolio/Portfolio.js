import React, { useState } from 'react';

import classes from './Portfolio.module.css';
import PortfolioTable from '../../components/PortfolioTable/PortfolioTable';
import PortfolioBuilder from '../../components/PortfolioBuilder/PortfolioBuilder';
import PortfolioEditor from '../../components/PortfolioEditor/PortfolioEditor';

const Portfolio = () => {
    const [editor, setEditor] = useState(
        {
            show: false,
            mode: '',
            portfolioToEdit: null
        }
    );
    const [portfolioTables, setPortfolioTables] = useState(
        [
            {
                portfolioId: `_${Math.random().toString(36).substr(2, 9)}`,
                coins: [
                    {
                        coinId: `_${Math.random().toString(36).substr(2, 9)}`,
                        coinName: 'Bitcoin',
                        coinSymbol: 'BTC',
                        coinAmount: 2,
                        sumInvested: 5000
                    },
                    {
                        coinId: `_${Math.random().toString(36).substr(2, 9)}`,
                        coinName: 'Ethereum',
                        coinSymbol: 'ETH',
                        coinAmount: 5,
                        sumInvested: 1000
                    },
                    {
                        coinId: `_${Math.random().toString(36).substr(2, 9)}`,
                        coinName: 'Litecoin',
                        coinSymbol: 'LTC',
                        coinAmount: 10,
                        sumInvested: 1000
                    }
                ]
            },
            {
                portfolioId: `_${Math.random().toString(36).substr(2, 9)}`,
                coins: [
                    {
                        coinId: `_${Math.random().toString(36).substr(2, 9)}`,
                        coinName: 'Cardano',
                        coinSymbol: 'ADA',
                        coinAmount: 2,
                        sumInvested: 5000
                    },
                    {
                        coinId: `_${Math.random().toString(36).substr(2, 9)}`,
                        coinName: 'Monero',
                        coinSymbol: 'XMR',
                        coinAmount: 5,
                        sumInvested: 1000
                    }
                ]
            }
        ]
    );

    const togglePortfolioEditor = (mode = '', portfolioToEdit = null) => {
        setEditor({
            show: !editor.show,
            mode: mode,
            portfolioToEdit: portfolioToEdit
        });
    }

    const addPortfolio = () => {
        const newPortfolio = {
            portfolioId: `_${Math.random().toString(36).substr(2, 9)}`,
            coins: []
        };
        setPortfolioTables(portfolioTables.concat(newPortfolio));
    }

    const addCoin = (portfolioId, newCoin) => {
        let updatedPortfolioTables = [...portfolioTables];
        updatedPortfolioTables.forEach(portfolio => {
            if (portfolio.portfolioId === portfolioId) {
                portfolio.coins.push(newCoin);
            }
        });
        setPortfolioTables(updatedPortfolioTables);
    };

    const deleteCoin = (id, coinId) => {
        const updatedPortfolioTables = portfolioTables.map(
            portfolio => {
                return portfolio.portfolioId === id ? {
                    portfolioId: id,
                    coins: portfolio.coins.filter(coin => coin.coinId !== coinId)
                } : portfolio;
            }
        );
        setPortfolioTables(updatedPortfolioTables);
    };

    let tables = null;
    tables = portfolioTables.map(table => (
        <PortfolioTable
            key={table.portfolioId}
            portfolio={table}
            addCoin={() => togglePortfolioEditor('add',table.portfolioId)}
            deleteCoin={deleteCoin}
            editCoin={() => togglePortfolioEditor('edit',table.portfolioId)}
        />
    ));

    return (
        <div className={classes.Portfolio}>
            <h2>Create your crypto portfolio</h2>
            <p>Keep track of your crypto portfolio by signing up / logging in</p>
            <PortfolioBuilder addPortfolio={addPortfolio} />
            {tables}
            <PortfolioEditor
                showEditor={editor.show}
                editorMode={editor.mode}
                portfolioToEdit={editor.portfolioToEdit}
                toggleEditor={togglePortfolioEditor}
                addCoin={addCoin}
            />
        </div>
    );
};

export default Portfolio;