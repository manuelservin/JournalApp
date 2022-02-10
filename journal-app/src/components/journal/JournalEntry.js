import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/1200x/05/69/a7/0569a700ca006779c80cf678dc54455d.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title"> Un nuevo día</p>
        <p className="journal__entry-content">
          lkjdslsfffjkgdsakljf das fsdfsdoid
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday </span>
        <h4>24</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
