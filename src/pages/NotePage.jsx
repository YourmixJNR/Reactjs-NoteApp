import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const Note = () => {
  let { id } = useParams();

  let navigate = useNavigate();

  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [id])

  let getNote = async () => {
    let response = await fetch(`http://localhost:5000/notes/${id}`)
    let data = await response.json()
    setNote(data)
  }

  const deleNote = async () => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application.json'
      },
      body: JSON.stringify(note)
    })
  }

  const handleDelete = () => {
    deleNote()
    navigate('/')
  }

  const updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...note, 'updated': new Date() })
    })
    navigate('/')
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/')
  }

  return (
    <div className='note'>

      <div className='note-header'>
        <h3>
        <Link to="/">
          <ArrowLeft onClick={handleSubmit}/>
        </Link>
        </h3>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>

    </div>
  );
};

export default Note;