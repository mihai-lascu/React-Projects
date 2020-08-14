import React from 'react';

import classes from './ListItem.module.css';
import Button from '../../UI/Button/Button';

const ListItem = (props) => {
    return (
        <div className={classes.ListItem}>
            {props.title}
            <p>quiz description</p>
            <p>quiz creator</p>
            <p>quiz difficulty</p>
            <p>expected time</p>
            <Button btnType='home'>Take quiz</Button>
        </div>
    )
}

export default ListItem;