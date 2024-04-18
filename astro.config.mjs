import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

let sbToken = loadEnv("", process.cwd(), 'STORYBLOK_TOKEN');
if (process.env.NETLIFY === true) {
  // use Netlify process.env var
  sbToken = process.env.STORYBLOK_TOKEN;
} else {
  sbToken = loadEnv("", process.cwd(), 'STORYBLOK_TOKEN');
}

// console.log(sbToken);
// https://astro.build/config
export default defineConfig({
  site: 'https://corisdevelopmentgroup.com',
  integrations: [
    
    storyblok({
      accessToken: sbToken.STORYBLOK_TOKEN,
      bridge: true,
      components: {
        // TODO Add Storyblok Components
        page: 'storyblok/Page',
        homePage: 'storyblok/Homepage',
        blogPost: 'storyblok/BlogPost',
        button: 'storyblok/Button',
        twoColumn: 'storyblok/TwoColumn',
        servicesCTA: 'storyblok/ServicesCTA',
        serviceBlok: 'storyblok/utils/Service',
        // blogList: 'storyblok/BlogPostList',
      },
      apiOptions: {
        region: "us",
      }
    }),
    tailwind(), 
    // sitemap(), 
    icon(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
    preview: {
      https: true,
    }
  },
  output: 'static',
  // adapter: netlify(),
});