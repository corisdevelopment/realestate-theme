import { defineConfig } from 'astro/config';

import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  site: 'https://corisdevelopmentgroup.com',
  integrations: [
    
    storyblok({
      accessToken: "dpqGY8PFmM9rMW46GK7WjAtt",
      bridge: true,
      // components: {
      //   // TODO Add Storyblok Components
      //   page: 'storyblok/Page',
      //   blogPost: 'storyblok/BlogPost',
      //   blogList: 'storyblok/BlogPostList',
      // },
      apiOptions: {
        region: "us",
      }
    }),
    tailwind(), 
    sitemap(), 
    icon(),
  ],
  output: 'server'
});