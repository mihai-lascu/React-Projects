import React from 'react';

import classes from './Search.module.css';
import SearchBar from './SearchBar/SearchBar';
import AddNote from './AddNote/AddNote';

const search = () => {
    return (
        <div className={classes.Search}>
            <SearchBar />
            <AddNote />
        </div>
    )
}

export default search;
