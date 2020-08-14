import React from 'react';

import classes from './QuizBuilder.module.css';

const QuizBuilder = () => {
    return (
        <div className={classes.QuizBuilder}>
            <div className={classes.Input}>
                <label className={classes.Label}>Title:</label>
                <input className={classes.InputElement} placeholder='Title...'></input>
            </div>
            <div>
                <label className={classes.Label}>Author:</label>
                <input className={classes.InputElement} placeholder='Author...'></input>
            </div>
            <p>build your own quiz</p>
            <p>build your own quiz</p>
            <p>build your own quiz</p>
            <p>build your own quiz</p>
            <p>build your own quiz</p>
            <p>build your own quiz</p>
            <p>build your own quiz</p>
        </div>
    )
}

export default QuizBuilder;