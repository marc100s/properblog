import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // This is the most important addition. 
  // It's crucial for SEO and for generating correct canonical URLs and sitemaps.
  // Replace `https://example.com` with your actual domain when you deploy.
  site: 'https://example.com',

  integrations: [
    tailwind({
      // This ensures that the typography plugin styles apply correctly to your MDX content.
      applyBaseStyles: false,
    }), 
    mdx(),
    // The sitemap integration automatically generates a `sitemap.xml` file during build,
    // which helps search engines discover all the pages on your site.
    sitemap()
  ]
});
