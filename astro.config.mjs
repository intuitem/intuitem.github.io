import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://intuitem.com",
  integrations: [
    tailwind(
      {applyBaseStyles: true,}
    ),
    sitemap(),
  ],
  redirects: {
    '/fr/solutions/mira/': '/fr/solutions/',
    '/en/solutions/mira/': '/en/solutions/'
  }
});
