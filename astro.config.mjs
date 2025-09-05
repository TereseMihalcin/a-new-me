// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	image: {
		service: passthroughImageService(),
	  },
});

// Sharp wasn't working so i switched to passthrough
// https://docs.astro.build/en/reference/errors/missing-sharp/
