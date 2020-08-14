import React from 'react';
import { connect } from 'react-redux';

import classes from './NotesList.module.css';
import * as actions from '../../store/actions/index';

const notesList = (props) => {

    let list = null;

    list = props.notes.map(note => {

        if ((props.selectedTag === '' || note.tags.includes(props.selectedTag))
            && (props.searchTitle === '' || note.title.includes(props.searchTitle))
            && (props.userId === note.userId)
        ) {
            return (
                <p
                    className={note.id === props.selectedNote ? `${classes.NoteTitle} ${classes.active}` : classes.NoteTitle}
                    key={note.id}
                    onClick={() => props.onSelectNote(note.id)}
                >
                    {note.title}
                </p>
            )
        } else {
            return null;
        }
    });

    return (
        <div className={classes.NotesList}>
            {list}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notesData.notes,
        selectedNote: state.notesData.selectedNoteId,
        selectedTag: state.notesData.selectedTag,
        searchTitle: state.notesData.searchTitle,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectNote: (noteId) => dispatch(actions.selectNote(noteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(notesList);