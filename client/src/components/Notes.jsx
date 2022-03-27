import React from 'react';
import NoteView from './NoteView.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHidden: false,
      searchedState: false,
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSearch() {
    this.setState({ searchedState: !this.state.searchedState });
  }

  render() {
    return (
      <div>
        {this.state.searchedState ?
          <div>
            {this.props.notes
                  .filter(note => note.title.includes(this.state.query))
                  .sort((a, b) => b.notecount - a.notecount)
                  .map(note => <NoteView key={note.id} note={note} reload={this.props.reload}/>)}
            <button onClick={() => this.setState({searchedState : !this.state.searchedState, query: ''})}>go back</button>
          </div>
          :
          <div>
            <form>
              <input type="text" value={this.state.query} placeholder="search notes" onChange={e => this.handleChange(e)} />
              <input type="button" onClick={this.handleSearch} value="search" />
            </form>
            <h1>My Notes</h1>
            <button onClick={() => this.setState({ showHidden: !this.state.showHidden })}>
              {this.state.showHidden ? "Hide Hidden Notes" : "Show Hidden Notes"}
            </button>
            <h1>Starred Notes</h1>
            {this.props.notes.filter(note => note.status === 'Starred').sort((a, b) => b.notecount - a.notecount).map(note => <NoteView key={note.id} note={note} reload={this.props.reload}/>)}
            <h1>Notes</h1>
            {this.props.notes.filter(note => note.status === 'None').sort((a, b) => b.notecount - a.notecount).map(note => <NoteView key={note.id} note={note} reload={this.props.reload}/>)}
            {this.state.showHidden ?
              <div>
                <h1>Hidden Notes</h1>
                {this.props.notes.filter(note => note.status === 'Hidden').sort((a, b) => b.notecount - a.notecount).map(note => <NoteView key={note.id} note={note} reload={this.props.reload}/>)}
              </div>
            : null}
          </div>}
        </div>
    )
  }
}



export default Notes;