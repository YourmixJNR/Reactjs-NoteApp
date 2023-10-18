import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
        <div className='note-list-item'>
            <h3>{note.body}</h3>
        </div>
    </Link>
  )
};

export default ListItem;