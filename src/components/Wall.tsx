'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { updateNoteColors, moveNote } from '@/store/notesStore/notesSlice';
import Note from './Note';

const Wall: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateNoteColors());
    }, 60000);  // Check every minute to update colors
    return () => clearInterval(interval);
  }, [dispatch]);

  const handleMoveNote = (fromIndex: number, toIndex: number) => {
    dispatch(moveNote({ fromIndex, toIndex }));
  };

  return (
    <div className="wall">
      {notes.map((note, index) => (
        <Note key={note.id} note={note} index={index} moveNote={handleMoveNote} />
      ))}
    </div>
  );
};

export default Wall;
