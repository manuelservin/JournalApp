import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://www.managementstudyhq.com/wp-content/uploads/2018/04/Motivation4.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
