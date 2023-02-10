import { trpc } from "../trpc";

function NotesList() {
  // ? obtener datos del backend
  const notes = trpc.note.get.useQuery();

  return <div>{JSON.stringify(notes.data)}</div>;
}

export default NotesList;
