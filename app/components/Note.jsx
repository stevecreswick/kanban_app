import React from 'react';

export default class Note extends React.Component {

  // Constructor similar to initialize in Backbone?
  constructor(props) {
    super(props);

  // Track editing state
  this.state = {
    editing: false
  };
}

// Render an individual note
render() {

  // If the editing state is true, render the edit form
  if(this.state.editing) {
    return this.renderEdit();
  }

  // Otherwise, render the note
  return this.renderNote();
}

// Render the Edit Form
renderEdit = () => {
  return <input type="text"
    autoFocus={true}
    placeholder={this.props.task}
    onBlur={this.finishEdit}
    onKeyPress={this.checkEnter} />;
};

// Render the Note
renderNote = () => {
  const onDelete = this.props.onDelete;

  return (
    <div onClick={this.edit}>
    <span className="task">{this.props.task}</span>
    {onDelete ? this.renderDelete() : null }
    </div>
  );

};

// Render the Delete Button
renderDelete = () => {
  return <button className="delete-note" onClick={this.props.onDelete}>x</button>;
};

// Change the editing state
edit = () => {
  this.setState({
    editing: true
  });
};

// Check to see if Enter was pressed
checkEnter = (e) => {
  if(e.key === 'Enter') {
    this.finishEdit(e);
  }
};

// Change the editing state back to false
finishEdit = (e) => {
  if(this.props.onEdit) {
    this.props.onEdit(e.target.value);
  }

  this.setState({
    editing: false
  });

};

}
