import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

let sbToken;
sbToken = loadEnv("", process.cwd(), 'STORYBLOK_TOKEN');
sbToken = sbToken.STORYBLOK_TOKEN;
if (process.env.NETLIFY === true) {
  sbToken = process.env.STORYBLOK_TOKEN;
}
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
        heroCTA: 'storyblok/HeroCTA',
        twoColumn: 'storyblok/TwoColumn',
        servicesCTA: 'storyblok/ServicesCTA',
        aboutCTA: 'storyblok/AboutCTA',
        propertySection: 'storyblok/PropertySection',
        imageGalleryDiamond: 'storyblok/ImageGalleryDiamond',
        button: 'storyblok/utils/Button',
        image: 'storyblok/utils/ImageBlok',
        splitText: 'storyblok/utils/SplitText',
        snippetWithButton: 'storyblok/utils/SnippetCTA',
        serviceBlok: 'storyblok/utils/Service',
        heroCard: 'storyblok/utils/HeroCard',
        propertyCard: 'storyblok/utils/PropertyCard',
        imageBlokGallery: 'storyblok/utils/ImageBlokGallery',
        heroBlok: 'storyblok/utils/HeroBlok',
        // blogList: 'storyblok/BlogPostList',
      },
      apiOptions: {
        region: "us",
      }
    }),
    tailwind(), 
    sitemap(), 
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
});