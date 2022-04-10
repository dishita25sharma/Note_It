import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [clicked, setClick] = useState(false);

  function handleClick(event) {
    setClick("true");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? "3" : "1"}
        />
        {clicked ? (
          <zoom in={clicked}>
            <Fab onClick={submitNote}>
              <AddCircleIcon />
            </Fab>
          </zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
