import React from 'react';
import { connect } from 'react-redux';

import classes from './DeleteButton.module.css';
import * as actions from '../../../../store/actions/index';

const deleteButton = (props) => {

    const deleteNote = () => {
        if (props.selectedNote !== null) {
            props.onDeleteNote();
        }
    }

    return (
        props.userId ?
        <div className={classes.DeleteButton} onClick={deleteNote}>
            <p>Del</p>
        </div> : null
    );
};

const mapStateToProps = state => {
    return {
        selectedNote: state.notesData.selectedNoteId,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteNote: () => dispatch(actions.deleteNote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(deleteButton);