import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItemHeader({ title, createdAt }) {
  return (
    <div className="note-item__header">
      <h3 className="note-title">{title}</h3>
      <p className="created-at">{showFormattedDate(createdAt)}</p>
    </div>
  );
}

export default NoteItemHeader;
