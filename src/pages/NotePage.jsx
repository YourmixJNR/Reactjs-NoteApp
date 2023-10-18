import React from 'react';
// import notes from '../assets/data';
import { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Note = () => {
  let { id } = useParams();

  let [notes, setNotes] = useState(null);

  useEffect(() => {
    getNotes()
  }, [id])

  let getNotes = async () => {
    let response = await fetch(`http://localhost:5000/posts/${id}`);
    let result = await response.json();
    setNotes(result)
  }

  return (
    <div className='note'>

      <div className='note-header'>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </div>

      <textarea value={notes?.body}></textarea>

    </div>
  );
};

export default Note;