import React from "react";

function NoteItemFooter({ id, onDelete, onArchive, archived, onUnarchive }) {
  return (
    <div className="note-item__footer">
      <button onClick={() => onDelete(id)} className="btn btn-delete">
        Delete
      </button>
      {!archived && (
        <button onClick={() => onArchive(id)} className="btn btn-archive ml-2">
          Archive
        </button>
      )}
      {archived && (
        <button
          onClick={() => onUnarchive(id)}
          className="btn btn-unarchive ml-2"
        >
          Unarchive
        </button>
      )}
    </div>
  );
}

export default NoteItemFooter;
