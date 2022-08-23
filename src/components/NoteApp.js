import React from "react";
import NoteSearch from "./NoteSearch";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoNote from "./NoNote";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppFooter from "./NoteAppFooter";
import NoteAppTitleSection from "./NoteAppTitleSection";
import { getInitialData } from "../utils/data";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      initialData: getInitialData(),
      notes: getInitialData(),
      toggleInputNote: false,
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.toggleAddInputForm = this.toggleAddInputForm.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  toggleAddInputForm() {
    this.setState((prevState) => {
      return {
        toggleInputNote: !prevState.toggleInputNote,
      };
    });
  }

  onSearchHandler(query) {
    const notes = this.state.initialData.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((contact) => contact.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes });
  }

  onUnarchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader />
        <NoteSearch onSearch={this.onSearchHandler} />
        {this.state.toggleInputNote && (
          <NoteInput
            toggleForm={this.toggleAddInputForm}
            onAdd={this.onAddNoteHandler}
          />
        )}
        <NoteAppTitleSection
          toggleForm={this.toggleAddInputForm}
          title={"Active"}
          toggleBtn={true}
        />

        {!this.state.notes.filter((note) => !note.archived).length && (
          <NoNote />
        )}

        <NoteList
          notes={this.state.notes.filter((note) => !note.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
          archived={false}
        />

        <NoteAppTitleSection
          toggleForm={this.toggleAddInputForm}
          title={"Archived"}
          toggleBtn={false}
        />

        {!this.state.notes.filter((note) => note.archived).length && <NoNote />}

        <NoteList
          notes={this.state.notes.filter((note) => note.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
          archived={true}
        />
        <NoteAppFooter />
      </div>
    );
  }
}

export default NoteApp;
