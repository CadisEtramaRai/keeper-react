import { useState } from "react";

function NoteArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="title"
        />
        <textarea
          name="content"
          rows="3"
          value={note.content}
          onChange={handleChange}
          placeholder="content..."
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default NoteArea;
