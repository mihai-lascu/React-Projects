import React from 'react';
import { connect } from 'react-redux';

import classes from './SaveButton.module.css';
import * as actions from '../../../../store/actions/index';

const saveButton = (props) => {

    const saveNotes = () => {
        const notes = props.notes.map(current => {
            if (current.userId !== props.userId) {
                return {
                    ...current
                }
            } else {
                return {
                    ...current,
                    userId: props.userId
                }
            }
        })
        props.onSaveNotes(props.token, notes);
    }

    return (
        <div className={classes.SaveButton} >
            <p hidden={props.saved} onClick={saveNotes}>Save</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        notes: state.notesData.notes,
        saved: state.notesData.saved,
        userId: state.auth.userId,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveNotes: (token, notes) => dispatch(actions.saveNotes(notes, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(saveButton);
