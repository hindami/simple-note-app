import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NoteItemBody from "./NoteItemBody";
import NoteItemFooter from "./NoteItemFooter";

function NoteItem({
  id,
  title,
  createdAt,
  body,
  onDelete,
  onArchive,
  archived,
  onUnarchive,
}) {
  return (
    <div className="note-item">
      <NoteItemHeader title={title} createdAt={createdAt} />
      <NoteItemBody body={body} />
      <NoteItemFooter
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;
