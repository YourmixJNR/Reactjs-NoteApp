import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '' });

  // Import Base URL
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const getNotes = async () => {
      try {
        let response = await fetch(`${baseUrl}/api/tasks/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        // Handle any errors that occur during the data fetching process
      }
    };
  
    getNotes();
  
  }, [baseUrl, getNotes]);
  

  const deleNote = async () => {
    try {
      await fetch(`${baseUrl}/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleDelete = () => {
    deleNote();
    navigate('/');
  };

  const createNote = async () => {
    try {
      await fetch(`${baseUrl}/api/tasks/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const updateNote = async () => {
    try {
      await fetch(`${baseUrl}/api/tasks/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  let handleSubmit = () => {
    if (id !== "new" && !note.title) {
      deleNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.title) {
      createNote();
    }
    navigate('/');
  };

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {id !== "new" ? (
          <button onClick={handleDelete}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'title': e.target.value }) }} value={note.title}></textarea>
    </div>
  );
};

export default Note;