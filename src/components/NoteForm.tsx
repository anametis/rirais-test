'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '@/store/notesStore/notesSlice';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

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
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-60 md:w-96'>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Note text"
      />
      <Input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <Button type="submit">Add Note</Button>
    </form>
  );
};

export default NoteForm;
