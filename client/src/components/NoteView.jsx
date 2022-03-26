import React from 'react';
import axios from 'axios';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteClicked: false,
      titleClicked: false,
      status: 'none',
      buttonStatus: false
    }

    this.onNoteClick = this.onNoteClick.bind(this);
    this.handleStatusClick = this.handleStatusClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onNoteClick() {
    this.setState({ noteClicked: !this.state.noteClicked })
  }

  handleStatusClick(e) {
      this.setState({ status: e.target.id })
      axios.patch('/api/movies', ['status', e.target.id, this.props.note.id])
        .then(() => console.log(e.target.id, ' changed on the server'))
        .catch(err => console.log(err));
  }

  handleEdit(e) {
    let edit = prompt('enter your edit');
    if (edit.length !== 0) {
      axios.patch('api/movies', [e.target.id, edit, this.props.note.id])
        .then(() => console.log(e.target.id, ' changed on server'))
        .catch(() => console.log(err));
    }
  }

  render() {
    return (
      <div className="noteView">
        <h1 onClick={this.onNoteClick}>Note #{this.props.note.id}</h1>
          {this.state.noteClicked ?
            <div>
              <div className="noteViewTitle">
                <h2 id="title" onClick={(e) => this.handleEdit(e)}>{this.props.note.title}</h2>
                <div>
                  <div className="noteViewCategory">
                    <h3>Category</h3>
                    <h3 id="category" onClick={(e) => this.handleEdit(e)}>{this.props.note.category}</h3>
                    <div id="tagline" onClick={(e) => this.handleEdit(e)}>{this.props.note.tagline}</div>
                    <div id="note" onClick={(e) => this.handleEdit(e)}>{this.props.note.note}</div>
                    <button className="status" id="hidden" onClick={(e) => this.handleStatusClick(e)}>
                      hidden
                    </button>
                    <button className="status" id="starred" onClick={(e) => this.handleStatusClick(e)}>
                      starred
                    </button>
                   </div>
                  </div>
                </div>
              </div>
            : null }
        </div>
    )
  }
};

export default Note;
