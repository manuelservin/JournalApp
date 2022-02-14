import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";
const JournalEntry = ({ id, title, body, imgUrl, date }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleActive = () => {
    dispatch(activeNote(id, { title, body, imgUrl, date }));
  };
  return (
    <div
      className="journal__entry animate__animated animate__fadeIn animate__faster"
      onClick={handleActive}
    >
      {imgUrl && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: ` url(${imgUrl})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title"> {title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
