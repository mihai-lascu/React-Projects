import React from 'react';
import { connect } from 'react-redux';

import classes from './SelectTags.module.css';
import * as actions from '../../../store/actions/index';

const selectTags = (props) => {

    const selectTag = (event) => {
        props.onSelectTag(event.target.value);
    }

    let tags = [];

    props.notes.forEach(current => {
        if ((current.tags) && (current.userId === props.userId)) {
            tags = [...new Set(tags.concat(current.tags))]
        }
    });

    tags = tags.filter(value => {
        return value !== '';
    });

    let options = [<option defaultValue key={'defaultValue'} value={''}>Sort by tag</option>];

    options = options.concat(tags.map(current => (
        <option key={`_${Math.random().toString(36).substr(2, 9)}`} value={current}>{current}</option>
    )));

    return (
        props.userId ?
        <div className={classes.Tags}>
            <select className={classes.SelectTags} onChange={selectTag}>
                {options}
            </select>
        </div> : null
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notesData.notes,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectTag: (tag) => dispatch(actions.selectNoteTag(tag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(selectTags);
