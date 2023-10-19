import { useState, useEffect } from "react";
import ListItem from "../components/Listitem";
import AddButton from "./AddButton";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  // Import Base URL
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const getNotes = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/tasks/`);
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

  useEffect(() => {
    getNotes();
  }, []);

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
      <AddButton />
    </div>
  );
};

export default Notes;