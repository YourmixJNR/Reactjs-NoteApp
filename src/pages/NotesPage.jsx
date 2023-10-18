import { useState, useEffect } from "react";
import ListItem from "../components/Listitem";

import React from 'react'

const Notes = () => {

  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://localhost:5000/posts");
    let result = await response.json();
    setNotes(result);
  };

  return (
    <div className="notes">
        <div className="notes-header">
            <h2 className="notes-title">&#9782; Notes</h2>
            <p className="notes-count">{notes.length}</p>
        </div>

        <div className="notes-list">
            {notes.map((note, index) => (
                <ListItem key={index} note={note} />
            ))}
        </div>

    </div>
)
}

export default Notes;