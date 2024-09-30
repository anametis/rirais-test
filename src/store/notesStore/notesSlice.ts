import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import getNoteColor from '@/utils/GetNoteColor';

interface Note {
  id: string;
  text: string;
  timestamp: string;
  deadline: string;
  color: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<{ text: string; deadline: string }>) => {
      const newNote: Note = {
        id: uuidv4(),
        text: action.payload.text,
        timestamp: new Date().toISOString(),
        deadline: action.payload.deadline,
        color: 'green',  // Initial color
      };
      state.notes.push(newNote);
    },
    editNote: (state, action: PayloadAction<{ id: string; text: string; deadline: string }>) => {
      const note = state.notes.find(note => note.id === action.payload.id);
      if (note) {
        note.text = action.payload.text;
        note.deadline = action.payload.deadline;
        note.color = getNoteColor(note.deadline);  // Recalculate color
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    moveNote: (state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) => {
      const [movedNote] = state.notes.splice(action.payload.fromIndex, 1);
      state.notes.splice(action.payload.toIndex, 0, movedNote);
    },
    updateNoteColors: (state) => {
      state.notes.forEach(note => {
        note.color = getNoteColor(note.deadline);
      });
    },
  },
});

export const { addNote, editNote, deleteNote, moveNote, updateNoteColors } = notesSlice.actions;
export default notesSlice.reducer;
