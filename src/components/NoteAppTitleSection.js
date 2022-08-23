import React from "react";

function NoteAppTitleSection({ toggleForm, title, toggleBtn }) {
  return (
    <div className="note-section__header">
      <h2 className="note-section__header-title">{title}</h2>
      {toggleBtn && (
        <button className="note-input__btn-add" onClick={() => toggleForm()}>
          +
        </button>
      )}
    </div>
  );
}

export default NoteAppTitleSection;
