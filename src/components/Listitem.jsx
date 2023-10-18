import React from 'react'

const Listitem = ({note}) => {
  return (
    <div className='note-list-item'>
      <h3>{note.body}</h3>
    </div>
  )
};

export default Listitem;