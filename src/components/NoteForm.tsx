'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '@/store/notesStore/notesSlice';

const NoteForm: React.FC = () => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text && deadline) {
      dispatch(addNote({ text, deadline }));
      setText('');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Note text"
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
