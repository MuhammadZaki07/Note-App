import React from "react";
import { showFormattedDate } from "../utils/initialData";

const NoteItem = ({ note, onDelete, onArchive }) => {
  return (
    <div class="bg-[#1e1e1e] p-3 rounded-xl hover:scale-110 transition-all duration-200 ease-in-out w-full">
      <div class="flex flex-col w-full">
        <div className="mb-7">
          <h3 class="text-2xl text-white font-bold">{note.title}</h3>
          <p class="text-xs text-gray-200 font-sans">
            {showFormattedDate(note.createdAt)}
          </p>
        </div>
        <div className="h-28 w-full mb-10">
          <p class="text-sm text-gray-200 font-sans">{note.body}</p>
        </div>
      </div>
      <div class="flex mt-3">
        <button
          class="bg-yellow-500 w-full rounded-l-lg p-1.5"
          onClick={() => onArchive(note.id)}
        >
          {note.archived ? "Unarchive" : <i class="bi bi-archive-fill"></i>}
        </button>
        <button
          class="bg-red-800 w-full rounded-r-lg p-1.5"
          onClick={() => onDelete(note.id)}
        >
          <i class="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
