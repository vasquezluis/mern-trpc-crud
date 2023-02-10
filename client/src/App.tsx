import { httpBatchLink } from "@trpc/client";
import { trpc } from "./trpc";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// * components
import NotesList from "./components/NotesList";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  // * conexion con los endpoints del backend
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <NotesList />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
