import React from "react";
import Sidebar from "./Sidebar";
import NoteScreen from "../../notes/NoteScreen";
// import Empty from './Empty'
const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <Empty/> */}

        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
