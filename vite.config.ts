import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  nitro: process.env.VERCEL ? true : false,
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  vite: {
    plugins: [
      process.env.VERCEL ? nitro({ preset: "vercel" }) : null
    ].filter(Boolean),
  },
});