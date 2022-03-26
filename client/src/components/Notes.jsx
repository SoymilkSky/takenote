import React from 'react';
import NoteView from './NoteView.jsx';

const Notes = (props) => {
  return (
    <div>
      <h1>My Notes</h1>
        {props.notes.map((note, index) => <NoteView key={index} note={note}/>)}
    </div>
  )
}

export default Notes;