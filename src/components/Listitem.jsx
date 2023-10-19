import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({note}) => {

    let getTitle = (note) => {
        const title = note.title.split('\n')[0]
        if (title.length > 45) {
            return title.slice(0, 45)
        }
        return title
    }

    let getContent = (note) => {
        let title = getTitle(note)
        let content = note.title.replaceAll('\n', '')
        content = content.replaceAll(title, '')

        if (content.length > 45) {
            return content.slice(0, 45) + '...'
        } else {
            return content
        }

    }
  return (
    <Link to={`/note/${note.id}`}>
        <div className="notes-list-item">
            <h3>{getTitle(note)}</h3>
            <p>{getContent(note)}</p>
        </div>
    </Link>
  )
};

export default ListItem;