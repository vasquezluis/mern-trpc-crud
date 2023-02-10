import morgan from "morgan";
import app from "./app";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router, createContext } from "./trpc";

// * middlewares
app.use(morgan("dev"));

// ? definicion de routers TRPC
const appRouter = router({});

// ? configuracion TRPC (que ejecutar cuando se hagan las consultas del cliente)
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000, () => {
  console.log("Server listening on port", 3000);
});
