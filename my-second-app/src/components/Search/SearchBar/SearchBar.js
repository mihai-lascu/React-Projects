import React from 'react';
import {connect} from 'react-redux';

import classes from './SearchBar.module.css';
import * as actions from '../../../store/actions/index';

const searchBar = (props) => {

    const searchNote = (event) => {
        props.onSearchNote(event.target.value);
    }

    return (
        <input className={classes.SearchBar} onChange={searchNote} placeholder={'Search by title...'}/>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchNote: (title) => dispatch(actions.searchNote(title))
    }
}

export default connect(null, mapDispatchToProps)(searchBar);
