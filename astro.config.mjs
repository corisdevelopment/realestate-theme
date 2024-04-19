import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

console.log('hello', process.env.STORYBLOK_TOKEN)
const sbToken = process.env.STORYBLOK_TOKEN;
// https://astro.build/config
export default defineConfig({
  site: 'https://corisdevelopmentgroup.com',
  integrations: [
    
    storyblok({
      accessToken: sbToken,
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