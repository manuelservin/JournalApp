import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadFile } from "../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(note));
  };
  const handleUploadPicture = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadFile(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span> 01 de junio de 1999</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handleUploadPicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
