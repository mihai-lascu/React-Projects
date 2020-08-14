import React from 'react';
import { connect } from 'react-redux';

import classes from './AddNote.module.css';
import * as actions from '../../../store/actions/index';

const addNote = (props) => {

    const addNote = () => {
        const newNote = {
            id: `_${Math.random().toString(36).substr(2, 9)}`,
            title: `New note`,
            content: 'New note \n\n',
            tags: [''],
            userId: props.userId
        }
        props.onAddNote(newNote);
    }

    return (
        <div className={classes.AddNote} onClick={props.userId ? addNote : null }>+</div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (newNote) => dispatch(actions.addNote(newNote))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addNote);
