import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import { storyblok } from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import react from '@astrojs/react';

let sbToken;
sbToken = loadEnv("", process.cwd(), 'STORYBLOK_TOKEN');
sbToken = sbToken.STORYBLOK_TOKEN;
if (process.env.NETLIFY === true) {
  sbToken = process.env.STORYBLOK_TOKEN;
}
// https://astro.build/config
export default defineConfig({
  site: 'https://corisdevelopmentgroup.com',
  integrations: [storyblok({
    accessToken: sbToken,
    bridge: {
      preventClicks: true,
      resolveLinks: 'url',
      resolveRelations: 'heroStyleTwo.listing',
    },
    livePreview: true,
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
      config: 'storyblok/Config',

      // Utils
      button: 'storyblok/utils/Button',
      image: 'storyblok/utils/ImageBlok',
      splitText: 'storyblok/utils/SplitText',
      snippetWithButton: 'storyblok/utils/SnippetCTA',
      serviceBlok: 'storyblok/utils/Service',
      heroCard: 'storyblok/utils/HeroCard',
      propertyCard: 'storyblok/utils/PropertyCard',
      imageBlokGallery: 'storyblok/utils/ImageBlokGallery',
      heroBlok: 'storyblok/utils/HeroBlok',
      heroStyleOne: 'storyblok/utils/heros/HeroStyleOne',
      heroStyleTwo: 'storyblok/utils/heros/HeroStyleTwo',
      
      // Layouts
      textWithHeading: 'storyblok/layout/TextWithHeading',
      textWithImage: 'storyblok/layout/TextWithImage',
      container: 'storyblok/layout/Container',
      columnsSection: 'storyblok/layout/Columns',
      column: 'storyblok/layout/Column',

      // Content
      composableText: 'storyblok/content/ComposableText',
      singleImage: 'storyblok/content/SingleImage',
      heading: 'storyblok/content/Heading',
      divider: 'storyblok/content/Divider',
      card: 'storyblok/content/Card',
      buttonBlok: 'storyblok/content/ButtonBlok',
      testimonial: 'storyblok/content/Testimonial',
      heroSection: 'storyblok/content/HeroSection',
      embededHTML: 'storyblok/content/EmbededHTML',
      imageCarousel: 'storyblok/content/ImageCarousel',
      listing: 'storyblok/listing/Listing',
      allListings: 'storyblok/listing/AllListings',
      featuredImage: 'storyblok/listing/FeaturedImage',
      listingDetails: 'storyblok/listing/ListingDetails',
      listingGallery: 'storyblok/listing/ListingGallery',
      
    },
    apiOptions: {
      region: "us",
    }
  }), tailwind(), sitemap(), icon(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
    preview: {
      https: true,
    }
  },
  output: 'server',
  adapter: netlify({
    imageCDN: false,
  }),
});