import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDelete } from "../actions/notes";
import { useForm } from "../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title } = formValues;
  const activeId = useRef(note.id); //para evitar el ciclo infinito
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id; //para evitar el ciclo infinito
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDelete(activeId.current));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
          value={body}
          name="body"
          onChange={handleInputChange}
        ></textarea>

        {note.imgUrl && (
          <div className="notes__image">
            <img src={`${note.imgUrl}`} alt="imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        {" "}
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
