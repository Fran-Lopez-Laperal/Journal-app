import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote:(state) => {
            state.isSaving = true;
          
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if(note.id === action.payload){
                    return action.payload
                }

                return note
            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotoToActiveNote: (state, action ) => {
            state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload];
            state.isSaving = false;

        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = "";
            state.notes = [];
            state.activeNote = null
        },
       

        deleteNoteById: (state, action) => {
            state.activeNote = null;
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotoToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;