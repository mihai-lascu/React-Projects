import React, { Component, Fragment } from 'react';

import classes from './Layout.module.css';
import Notes from '../Notes/Notes';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import Toolbar from '../../components/Toolbar/Toolbar';
import Auth from '../Auth/Auth';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <main className={classes.Container}>
                    <Auth />
                    <div className={classes.Content}>
                        <Search />
                        <Toolbar />
                        <Tags />
                        <Notes />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Layout;