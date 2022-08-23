import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleLimit: false, title: "", content: "" };
    this.lengthValidationHandler = this.lengthValidationHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
      this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.closeFormHandler = this.closeFormHandler.bind(this);
  }

  lengthValidationHandler(event) {
    if (event.target.value.length > 50) {
      this.setState({ titleLimit: true });
    } else {
      this.setState({ titleLimit: false });
    }
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onContentChangeEventHandler(event) {
    this.setState(() => {
      return {
        content: event.target.value,
      };
    });
  }

  closeFormHandler() {
    this.props.toggleForm();
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAdd({ title: this.state.title, body: this.state.content });
    setTimeout(this.props.toggleForm(), 1000);
  }
  render() {
    return (
      <div className="modal">
        <form
          action=""
          className="note-input"
          onSubmit={this.onSubmitEventHandler}
        >
          <button
            className="note-input__btn-close"
            onClick={this.closeFormHandler}
          >
            X
          </button>
          <h2 className="note-input__title">Add Note</h2>
          <p className="character-remaining">
            Characters Remaining: {50 - this.state.title.length}
          </p>
          <input
            type="text"
            className="w-100 note-input__title-input"
            placeholder="Title..."
            onKeyUp={this.lengthValidationHandler}
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
          />
          {this.state.titleLimit && (
            <div className="error-message">Max. 50 Characters</div>
          )}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-100 note-input__content-input"
            placeholder="Content..."
            value={this.state.content}
            onChange={this.onContentChangeEventHandler}
          ></textarea>
          <button
            type="submit"
            className="btn btn-save"
            disabled={this.state.titleLimit}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
