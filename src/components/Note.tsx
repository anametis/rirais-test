"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editNote, deleteNote } from "@/store/notesStore/notesSlice";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { updateNoteColors } from "@/store/notesStore/notesSlice";
// import getNoteColor from "@/utils/GetNoteColor";

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
  
  // const noteColor = getNoteColor(note.deadline);
  
  const handleEdit = () => {
    const newText = prompt("Edit your note:", note.text);
    const newDeadline = prompt("Edit the deadline:", note.deadline);
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
  
  const getAppliedColor = (color: string): string => {
    const colorMap: { [key: string]: string } = {
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      orange: "bg-orange-500",
      red: "bg-red-500",
      black: "bg-gray-300",
    };
    return colorMap[color] || "bg-black";
  };
  

  const appliedColor = getAppliedColor(note.color);

  useEffect(() => {
    dispatch(updateNoteColors());
  }, [note.color, dispatch]);

  return (
    <Card className={`note ${appliedColor} p-4 m-4 flex flex-col gap-5`}>
      <p>{note.text}</p>
      <div className="flex flex-col gap-1 text-gray-500 ">
        <p>Created at: {new Date(note.timestamp).toLocaleString()}</p>
        <p>Deadline: {new Date(note.deadline).toLocaleString()}</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleMoveUp}>Move Up</Button>
        <Button onClick={handleMoveDown}>Move Down</Button>
      </div>
    </Card>
  );
};

export default Note;
