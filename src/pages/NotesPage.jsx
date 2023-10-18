import notes from "../assets/data";
import Listitem from "../components/Listitem";

import React from 'react'

const Notes = () => {
  return (
    <div>
      {notes.map((note, index) => (
        <Listitem key={index} note={note} />
      ))}
    </div>
  )
}

export default Notes;