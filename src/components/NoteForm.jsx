import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const maxTitleLength = 50;
  const titlechartLife = maxTitleLength - title.length;


  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    onAddNote(newNote);
    setTitle("");
    setBody("");
  };

  return (
    <section className="max-w-full py-10 px-32">
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <div className="text-right">
          {title.length} / {maxTitleLength}
        </div>
        <input
          className="mb-5 bg-[#171717] p-2 rounded-lg text-gray-300 w-full"
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= maxTitleLength) {
              setTitle(e.target.value);
            }
          }}
          required
        />
        <textarea
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="rounded-lg bg-[#171717] text-gray-300 p-2 w-full h-36"
        ></textarea>
        <button
          type="submit"
          className="bg-[#171717] w-full rounded-lg p-2 text-white hover:bg-[#2e2e2e] mt-5"
        >
          Tambah Catatan
        </button>
      </form>
    </div>
  </section>
  
  );
};

export default NoteForm;
