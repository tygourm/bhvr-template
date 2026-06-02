import { resolve } from "node:path";

import { ApiResponseSchema } from "@bhvr-template/shared";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.get("/api", (c) => {
  const response = ApiResponseSchema.parse({
    success: true,
    data: { id: crypto.randomUUID() },
  });
  return c.json(response);
});

if (Bun.env.NODE_ENV === "production") {
  const dist = resolve(import.meta.dir, "../../web/dist");
  app.use("/*", serveStatic({ root: dist }));
  app.get("/*", async (c) =>
    c.html(await Bun.file(`${dist}/index.html`).text()),
  );
}

export default {
  port: 3000,
  fetch: app.fetch,
};
