import React from 'react';

import classes from './BuildAQuiz.module.css';
import Button from '../UI/Button/Button';
import QuizBuilder from '../../containers/QuizBuilder/QuizBuilder';

const BuildAQuiz = () => {
    return (
        <div className={classes.BuildAQuiz}>
            <QuizBuilder />
            <Button btnType={'home'}>Build quiz</Button>
        </div>
    )
}

export default BuildAQuiz;