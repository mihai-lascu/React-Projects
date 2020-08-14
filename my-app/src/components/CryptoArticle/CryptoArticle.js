import React from 'react';
import { connect } from 'react-redux';

import classes from './CryptoArticle.module.css';

const cryptoArticle = (props) => {

    let article = null;

    const resources = props.getResources();
    article = props.cryptoData.map(crypto => {
        return crypto.symbol.toUpperCase() === props.symbol ? (
            <article className={classes.Article} key={crypto.id}>
                <p><strong>{crypto.name}</strong> - {crypto.tagline}</p><br />
                <p>{crypto.overview}</p><br />
                <p>{crypto.background}</p><br />
                <p>{crypto.technology}</p><br />
                <p>Resources</p>
                {resources}
            </article>
        ) : null;
    })

    return article;
}

const mapStateToProps = state => {
    return {
        cryptoData: state.crypto.cryptoData,
    }
}

export default connect(mapStateToProps)(cryptoArticle);
