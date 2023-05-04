import { React, useState, useEffect } from "react";
import "../Note.css";
import Note from "../Note";
function Notes() {
  return (
    <div className="notes">
      <Note />
      <Note />
      <Note />
    </div>
  );
}
export default Notes;
