import { NoteData, Tag } from "../App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  availableTags: Tag[];
};

export function NewNote({ onSubmit, availableTags }: NewNoteProps) {
  return (
    <div id="notes-new-hover">
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} availableTags={availableTags} />
    </div>
  );
}
