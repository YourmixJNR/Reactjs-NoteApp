import React from 'react';
import notes from '../assets/data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Note = () => {
  let { id } = useParams();

  let note = notes.find(note => note.id == id);

  return (
    <div className='note'>

      <div className='note-header'>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </div>

      <textarea value={note?.body}></textarea>

    </div>
  );
};

export default Note;