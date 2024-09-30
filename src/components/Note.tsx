'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from '@/store/notesStore/notesSlice';

interface NoteProps {
  note: {
    id: string;
    text: string;
    timestamp: string;
    deadline: string;
    color: string;
  };
  index: number;
  moveNote: (fromIndex: number, toIndex: number) => void;
}

const Note: React.FC<NoteProps> = ({ note, index, moveNote }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newText = prompt('Edit your note:', note.text);
    const newDeadline = prompt('Edit the deadline:', note.deadline);
    if (newText && newDeadline) {
      dispatch(editNote({ id: note.id, text: newText, deadline: newDeadline }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleMoveUp = () => {
    if (index > 0) {
      moveNote(index, index - 1);
    }
  };

  const handleMoveDown = () => {
    moveNote(index, index + 1);
  };

  return (
    <div className={`note ${note.color}`}>
      <p>{note.text}</p>
      <p>Created: {new Date(note.timestamp).toLocaleString()}</p>
      <p>Deadline: {new Date(note.deadline).toLocaleString()}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleMoveUp}>Move Up</button>
      <button onClick={handleMoveDown}>Move Down</button>
    </div>
  );
};

export default Note;
