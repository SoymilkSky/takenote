import React from 'react';

const Notes = (props) => {
  console.log(props);
  return (
    <div>
      <h1>My Notes</h1>
        {props.notes.map((note, index) =>
          <div key={index}>
            <h1>{note.title}</h1>
            <h2>{note.category}</h2>
            <h3>{note.note}</h3>
          </div>)}
    </div>
  )
}

export default Notes;