import express from "express";
import morgan from "morgan";
import cors from 'cors'
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router, createContext } from "./trpc";
import { notesRouter } from "./routes/notes";

const app = express();

// * middlewares
app.use(morgan("dev"));
app.use(cors())

// ? definicion de routers TRPC
const appRouter = router({
  note: notesRouter,
});

// ? configuracion TRPC (que ejecutar cuando se hagan las consultas del cliente)
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// ? crear tipos para el frontend
export type AppRouter = typeof appRouter;

export default app;
