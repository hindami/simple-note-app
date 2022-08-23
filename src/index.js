import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import NoteApp from "./components/NoteApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
