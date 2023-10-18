import React from 'react';
import notes from '../assets/data';
import { useParams } from 'react-router-dom';

const Note = () => {
  let { id } = useParams();

  let note = notes.find(note => note.id == id);

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default Note;