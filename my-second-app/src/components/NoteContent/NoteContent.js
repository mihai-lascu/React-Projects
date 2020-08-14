import React from 'react';
import { connect } from 'react-redux';

import classes from './NoteContent.module.css';
import * as actions from '../../store/actions/index';

const noteContent = (props) => {
    let content = '';

    if (props.notes) {
        props.notes.forEach(current => {
            if (current.id === props.selectedNote) {
                content = current.content;
            };
        });
    }

    const updateNotes = (event) => {
        props.onUpdateNotes(event.target.value, event.target.value.split('\n')[0]);
    };

    return (
        <div className={classes.Note}>
            <textarea
                disabled={props.selectedNote ? false : true}
                className={classes.NoteContent}
                onChange={updateNotes}
                value={content}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        notes: state.notesData.notes,
        selectedNote: state.notesData.selectedNoteId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateNotes: (newContent, newTitle) => dispatch(actions.updateNote(newContent, newTitle))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(noteContent);