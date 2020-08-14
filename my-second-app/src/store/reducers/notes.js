import * as actionTypes from '../actions/actionTypes';

const initialState = {
    notes: [],
    selectedNoteId: null,
    selectedTag: '',
    searchTitle: '',
    saved: true
};

const reducer = (state = initialState, action) => {
    let newNotes = null;
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: state.notes.concat(action.newNote),
                selectedNoteId: action.newNote.id,
                saved: false
            }
        case actionTypes.DELETE_NOTE:
            newNotes = state.notes.filter(note => note.id !== state.selectedNoteId);
            return {
                ...state,
                notes: newNotes,
                selectedNoteId: null,
                saved: false
            }
        case actionTypes.DROP_NOTES:
            return {
                ...state,
                notes: [],
                selectedNoteId: null,
                selectedTag: '',
                searchTitle: '',
                saved: true,
            }
        case actionTypes.SELECT_NOTE:
            return {
                ...state,
                selectedNoteId: action.noteId
            }
        case actionTypes.UPDATE_NOTES:
            newNotes = [...state.notes];
            newNotes.forEach(current => {
                if (current.id === state.selectedNoteId) {
                    current.content = action.newContent;
                    current.title = action.newTitle;
                };
            });
            return {
                ...state,
                notes: newNotes,
                saved: false
            }
        case actionTypes.UPDATE_NOTE_TAGS:
            newNotes = [...state.notes];
            newNotes.forEach(current => {
                if (current.id === state.selectedNoteId) {
                    current.tags = [...action.tags]
                }
            });
            return {
                ...state,
                notes: newNotes,
                saved: false
            }
        case actionTypes.SELECT_NOTE_TAG:
            return {
                ...state,
                selectedTag: action.tag
            }
        case actionTypes.SEARCH_NOTE:
            return {
                ...state,
                searchTitle: action.title
            }
        case actionTypes.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.notes
            }
        case actionTypes.FETCH_NOTES_FAILED:
            alert(action.error);
            return {
                ...state
            }
        case actionTypes.SAVE_NOTES_SUCCESS:
            return {
                ...state,
                saved: true
            }
        case actionTypes.SAVE_NOTES_FAILED:
            alert(action.error);
            return {
                ...state,
                saved: false
            }
        default:
            return state;
    }
};

export default reducer;