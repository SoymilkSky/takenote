import React from 'react';
import NoteView from './NoteView.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHidden: false,
    }
  }

  render() {
    return (
      <div>
        <h1>My Notes</h1>
        <button onClick={() => this.setState({showHidden: !this.state.showHidden})}>
          {this.state.showHidden ? "Hide Hidden Notes" : "Show Hidden Notes"}
        </button>
        <h2>Starred Notes</h2>
          <div>
            {this.props.notes.filter(note => note.status === 'Starred').map(note => <NoteView key={note.id} note={note}/>)}
          </div>
        <h2>Notes</h2>
          {this.props.notes.filter(note => note.status === 'None').map(note => <NoteView key={note.id} note={note}/>)}
        {this.state.showHidden ?
          <div>
          <h2>Hidden Notes</h2>
            { this.props.notes.filter(note => note.status === 'Hidden').map(note => <NoteView key={note.id} note={note}/>) }
          </div>
          : null}
      </div>
    )
  }
}

export default Notes;