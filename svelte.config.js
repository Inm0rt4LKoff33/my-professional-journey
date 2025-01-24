import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: undefined,
      strict: false,
    }),
    paths: {
      base:
        process.env.NODE_ENV === "production"
          ? "/My-Professional-Portfolio"
          : "",
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
