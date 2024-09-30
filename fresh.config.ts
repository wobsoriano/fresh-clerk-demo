import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { clerkPlugin } from "$fresh_clerk/mod.ts";

export default defineConfig({
  plugins: [tailwind(), clerkPlugin()],
});
