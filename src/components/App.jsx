import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [details, setDetails] = useState([]);

  function addNote(heading, content) {
    setDetails((preValue) => [
      ...preValue,
      {
        headingDetail: heading,
        contentDetail: content
      }
    ]);
    console.log(details);
  }

  function deleteNode(Nodekey) {
    console.log("delete run");
    setDetails((preValue) => {
      return preValue.filter((detail, index) => index !== Nodekey);
    });
    console.log(details);
  }

  return (
    <div>
      <Header />
      <CreateArea updateNotes={addNote} />
      {details.map((x, index) => {
        return (
          <Note
            key={index}
            id={index}
            deleteNodefunc={deleteNode}
            title={x.headingDetail}
            content={x.contentDetail}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
