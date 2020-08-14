import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import NoteContent from '../../components/NoteContent/NoteContent';
import NotesList from '../../components/NotesList/NotesList';
import * as actions from '../../store/actions/index';

class Notes extends Component {

    componentDidUpdate = (prevProps, prevState) => {
        if ((this.props.userId !== prevProps.userId) && (this.props.userId !== null)) {
            this.props.onFetchNotes(this.props.token, this.props.userId);
        } else if ((this.props.userId !== prevProps.userId) && (this.props.userId === null)) {
            this.props.onDropNotes();
        }
    }

    render() {

        return (
            <Fragment>
                <NotesList />
                <NoteContent />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNotes: (token, userId) => dispatch(actions.fetchNotes(token, userId)),
        onDropNotes: () => dispatch(actions.dropNotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);