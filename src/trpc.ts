import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

// ? funcion de context, por si existe metodos de autenticacion
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

// * objeto de trpc
const t = initTRPC.context().create();

// * manejador de rutas de trpc
export const router = t.router;

// * manejador de middlewares de trpc
export const middlewares = t.middleware;

// * manejador de procedures de trpc (funciones accesibles desde fuera)
export const publicProcedure = t.procedure;
