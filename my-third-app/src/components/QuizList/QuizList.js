import React from 'react';

import classes from './QuizList.module.css';
import ListItem from './ListItem/ListItem';

const QuizList = () => {
    return (
        <div className={classes.QuizList}>
            <ListItem title='LOTR quiz'></ListItem>
            <ListItem title='Star wars quiz'></ListItem>
            <ListItem title='Harry Potter quiz'></ListItem>
        </div>
    );
};

export default QuizList;