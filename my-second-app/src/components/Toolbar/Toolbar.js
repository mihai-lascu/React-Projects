import React from 'react';

import classes from './Toolbar.module.css';
import Buttons from './Buttons/Buttons';
import AccountControls from './AccountControls/AccountControls';

const toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <Buttons />
            <AccountControls />
        </div>
    )
}

export default toolbar;
