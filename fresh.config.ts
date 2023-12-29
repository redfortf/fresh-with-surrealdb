import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

import { Context } from "$/routes/_middleware.ts";
import { host, port } from "$/environment/fresh.ts";

await Context.init();

export default defineConfig({
    plugins: [tailwind()],
    server: {
        hostname: host,
        port: Number(port) 
    }
});
