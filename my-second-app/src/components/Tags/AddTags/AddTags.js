import React from 'react';
import { connect } from 'react-redux';

import classes from './AddTags.module.css';
import * as actions from '../../../store/actions/index';

const addTags = (props) => {

    const updateTags = (event) => {
        props.onUpdateNoteTags(event.target.value.split(' '));
    }

    let tags = '';
    props.notes.forEach(current => {
        if (current.id === props.selectedNote) {
            if(current.tags) {
                tags = current.tags.join(' ');
            }
        }
    })

    return (
        props.userId ?
        <div className={classes.AddTags}>
            <input
                className={classes.TagsInput}
                placeholder={props.selectedNote ? 'Add tag...' : ''}
                onChange={updateTags}
                value={tags}
                disabled={props.selectedNote ? false : true}
            />
        </div> : null
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notesData.notes,
        selectedNote: state.notesData.selectedNoteId,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateNoteTags: (newTags) => dispatch(actions.updateNoteTags(newTags))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(addTags);
