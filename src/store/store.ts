import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesStore/notesSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
