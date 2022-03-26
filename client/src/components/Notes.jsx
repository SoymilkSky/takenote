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
                  .map(note => <NoteView key={note.id} note={note}/>)}
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
            <h2>Starred Notes</h2>
            {this.props.notes.filter(note => note.status === 'Starred').map(note => <NoteView key={note.id} note={note} />)}
            <h2>Notes</h2>
            {this.props.notes.filter(note => note.status === 'None').map(note => <NoteView key={note.id} note={note} />)}
            {this.state.showHidden ?
              <div>
                <h2>Hidden Notes</h2>
                {this.props.notes.filter(note => note.status === 'Hidden').map(note => <NoteView key={note.id} note={note} />)}
              </div>
            : null}
          </div>}
        </div>
    )
  }
}



export default Notes;