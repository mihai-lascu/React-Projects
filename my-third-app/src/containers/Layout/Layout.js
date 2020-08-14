import React, { Fragment } from 'react'
import Home from '../Home/Home';

import classes from './Layout.module.css';

const Layout = () => {
    return (
        <Fragment>
            <header style={{textAlign: 'center'}}>
                <h1>Welcome to QuizBuilder</h1>
            </header>
            <main className={classes.Content}>
                <Home />
            </main>
        </Fragment>
    )
}

export default Layout;
