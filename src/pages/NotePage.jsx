import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const Note = () => {
  let { id } = useParams();

  let navigate = useNavigate();

  let [note, setNote] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      try {
        if (id === "new") return;
        let response = await fetch(`http://localhost:5000/notes/${id}`);
        let data = await response.json();
        setNote(data);
      } catch (error) {
        // Handle error here
        console.error("Error fetching note:", error);
      }
    };
    getNotes();
  }, [id]);

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

  const createNote = async () => {
    await fetch(`http://localhost:5000/notes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

  const updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

    let handleSubmit = () => {
      if (id !== "new" && !note.body) {
          deleNote();
      } else if (id !== "new") {
          updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }

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
        {id !== "new" ? (
        <button onClick={handleDelete}>Delete</button>
        )
        : (
        <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>

    </div>
  );
};

export default Note;