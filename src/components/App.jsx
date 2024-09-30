import React, { useState } from "react";
import NoteItem from "./NoteItem.jsx";
import NoteForm from "./NoteForm.jsx";
import SearchBar from "./SearchBar.jsx";
import { getInitialData } from "../utils/initialData";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [keyword, setKeyword] = useState("");

  // Filter catatan berdasarkan keyword dan status arsip
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase()) && !note.archived
  );
  const archivedNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase()) && note.archived
  );

  // Tambah catatan baru
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Hapus catatan
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // Arsipkan atau batal arsip catatan
  const handleArchiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  // Ubah keyword pencarian
  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
  };

  return (
    <>
      <header className="bg-black flex w-full py-5 justify-between px-5 items-center">
        <h1 className="text-white text-2xl font-bold">Note App</h1>
        <SearchBar keyword={keyword} onKeywordChange={handleKeywordChange} />
      </header>
      <NoteForm onAddNote={handleAddNote} />
      <div className="px-24">
        <div className="p-5">
          <h2 className="text-4xl font-bold mb-5">Daftar Catatan</h2>
          <div className="grid grid-cols-4 gap-8">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onDelete={handleDeleteNote}
                  onArchive={handleArchiveNote}
                />
              ))
            ) : (
              <div className="notes-list__empty-message">
                Tidak ada catatan yang ditemukan.
              </div>
            )}
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-4xl font-bold mb-5">Daftar Archive</h2>
          <div className="grid grid-cols-4 gap-8">
            {archivedNotes.length > 0 ? (
              archivedNotes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onDelete={handleDeleteNote}
                  onArchive={handleArchiveNote}
                />
              ))
            ) : (
              <div className="notes-list__empty-message">
                Tidak ada catatan yang di-archive.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
