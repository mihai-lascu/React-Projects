import React from 'react';

import classes from './CryptoNews.module.css';

const cryptoNews = (props) => {
    return (
        <div className={classes.News}>
            <p><strong>{props.title}</strong></p>
            <p>{props.content}</p>
            <p>Author: {props.author}</p>
            <a href={props.url}>Read more</a>
        </div>
    )
}

export default cryptoNews;