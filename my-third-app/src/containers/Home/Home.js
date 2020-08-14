import React, { useState } from 'react';

import classes from './Home.module.css';
import QuizList from '../../components/QuizList/QuizList';
import BuildAQuiz from '../../components/BuildAQuiz/BuildAQuiz';
import Button from '../../components/UI/Button/Button';
import Model from '../../components/UI/Model/Model';

const Home = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className={classes.Home}>
            <div className={classes.Presentation}>
                home stuff + idea presentation
            </div>
            <Button clicked={() => setShowForm(true)} btnType={'home'}>Build your own quiz</Button>
            <Model showForm={showForm} showBackdrop={() => setShowForm(false)}>
                <BuildAQuiz />
            </Model>
            <QuizList />
        </div>
    );
};

export default Home;