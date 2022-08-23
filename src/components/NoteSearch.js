import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <form className="note-app__search w-100">
        <input
          type="text"
          placeholder="Search by title"
          className="w-100 note-search__input"
          onKeyUp={this.onSearchHandler}
        />
      </form>
    );
  }
}

export default NoteSearch;
