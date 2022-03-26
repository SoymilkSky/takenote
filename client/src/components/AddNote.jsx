import React from 'react';
import axios from 'axios';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      tagline: '',
      note: '',
    }
    this.onTextInput = this.onTextInput.bind(this);
    this.save = this.save.bind(this);
  }

  onTextInput(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  save(e) {
    e.preventDefault();
    axios.post('/api/movies', [this.state.title, this.state.category, this.state.tagline, this.state.note])
      .then(() => console.log('successful note save'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>New Note</h1>
        <form>
          Title:
          <br />
          <input
            id="title"
            className="note-label"
            type="text"
            placeholder="Title"
            onChange={(e) => {this.onTextInput(e)}}/>
          <br />
          Category:
          <br />
          <input
            id="category"
            className="note-label"
            type="text"
            placeholder="Category"
            onChange={(e) => {this.onTextInput(e)}}/>
          <br />
          Tagline:
          <br />
          <input
            id="tagline"
            className="note-label"
            type="text"
            placeholder="Tagline"
            onChange={(e) => {this.onTextInput(e)}}/>
          <br />
          Note:
          <br />
          <textarea
            id="note"
            className="note-input"
            type="text"
            placeholder="Write your note here!"
            onChange={(e) => {this.onTextInput(e)}}>
          </textarea>
          <br />
          <button className="button" onClick={(e) => this.save(e)}>Save</button>
        </form>
      </div>
    )
  }
};

export default AddNote;
