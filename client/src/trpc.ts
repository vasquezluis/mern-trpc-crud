import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../src/app";

// ? las cosas que pude consultar la constante trpc va a derivar de AppRouter (backend)
export const trpc = createTRPCReact<AppRouter>();
