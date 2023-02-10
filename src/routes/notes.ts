import { router, publicProcedure } from "../trpc";

// ? permite definir una consulta
const getNotes = publicProcedure.query(() => {
  return [{
    id: 1,
    title: "Note 1",
    content: "This is the note 1"
  }];
});

// ? exportar queries con el objeto router de trpc
export const notesRouter = router({
  get: getNotes,
});
