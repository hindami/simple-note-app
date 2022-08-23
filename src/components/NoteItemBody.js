import React from "react";

function NoteItemBody({ body }) {
  return (
    <div className="note-item__body">
      <article>
        <p>{body}</p>
      </article>
    </div>
  );
}

export default NoteItemBody;
