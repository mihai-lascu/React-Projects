import * as actionTypes from './actionTypes';

export const updateNote = (newContent, newTitle) => {
    return {
        type: actionTypes.UPDATE_NOTES,
        newContent: newContent,
        newTitle: newTitle
    };
};

export const selectNote = (noteId) => {
    return {
        type: actionTypes.SELECT_NOTE,
        noteId: noteId
    };
};

export const updateNoteTags = (tags) => {
    return {
        type: actionTypes.UPDATE_NOTE_TAGS,
        tags: tags
    };
};

export const selectNoteTag = (tag) => {
    return {
        type: actionTypes.SELECT_NOTE_TAG,
        tag: tag
    };
};

export const searchNote = (title) => {
    return {
        type: actionTypes.SEARCH_NOTE,
        title: title
    };
};

export const addNote = (newNote, token) => {
    return {
        type: actionTypes.ADD_NOTE,
        newNote: newNote,
        token: token
    };
};

export const deleteNote = () => {
    return {
        type: actionTypes.DELETE_NOTE
    };
};

export const dropNotes = () => {
    return {
        type: actionTypes.DROP_NOTES
    };
};

export const fetchNotes = (token, userId) => {
    return {
        type: actionTypes.FETCH_NOTES,
        token: token,
        userId: userId
    };
};

export const fetchNotesSuccess = (notes) => {
    return {
        type: actionTypes.FETCH_NOTES_SUCCESS,
        notes: notes
    };
};

export const fetchNotesFailed = (error) => {
    return {
        type: actionTypes.FETCH_NOTES_FAILED,
        error: error
    };
};

export const saveNotes = (notes, token) => {
    return {
        type: actionTypes.SAVE_NOTES,
        notes: notes,
        token: token
    };
};

export const saveNotesSuccess = () => {
    return {
        type: actionTypes.SAVE_NOTES_SUCCESS
    };
};

export const saveNotesFailed = (error) => {
    return {
        type: actionTypes.SAVE_NOTES_FAILED,
        error: error
    };
};