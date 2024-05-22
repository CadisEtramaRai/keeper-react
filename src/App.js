import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteArea from "./components/NoteArea";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <NoteArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDel={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
