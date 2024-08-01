import React, { useState } from "react";

function CreateArea(props) {
  var [heading, setHeading] = useState("");
  var [content, setContent] = useState("");

  function handleHeadingChange(event) {
    var value = event.target.value;
    setHeading(value);
  }

  function handleContentChange(event) {
    var value = event.target.value;
    setContent(value);
  }

  function renderDetails(e) {
    props.updateNotes(heading, content);
    setHeading("");
    setContent("");
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleHeadingChange}
          placeholder="Title"
          value={heading}
        />
        <textarea
          name="content"
          onChange={handleContentChange}
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={renderDetails}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
