import React from 'react';

import classes from './Buttons.module.css';
import DeleteButton from './DeleteButton/DeleteButton';
import SaveButton from './SaveButton/SaveButton';

const buttons = () => {
    return (
        <div className={classes.Buttons}>
            <DeleteButton />
            <SaveButton />
        </div>
    )
}

export default buttons;