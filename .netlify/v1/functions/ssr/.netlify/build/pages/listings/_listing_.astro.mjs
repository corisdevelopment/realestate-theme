import { E as Ee, x as xe } from '../../chunks/Footer_Z0x7l_nH.mjs';
import { d as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute } from '../../chunks/astro/server_DVJ5F72b.mjs';
import { $ as $$Layout } from '../../chunks/Button_CuWxHUZa.mjs';
import { $ as $$StoryblokComponent } from '../../chunks/StoryblokComponent_DtLUG-V5.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://corisdevelopmentgroup.com");
async function getStaticPaths() {
  const storyblokApi = Ee();
  const { data } = await storyblokApi.get("cdn/stories", {
    content_type: "listing",
    version: "published",
    resolve_links: "url"
  });
  const pages = data.stories;
  const paths = pages.map((page) => {
    return {
      params: { listing: page.slug },
      props: { page }
    };
  });
  return paths;
}
const $$listing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$listing;
  const sbApi = Ee();
  const { listing } = Astro2.params;
  const { data } = await sbApi.get(`cdn/stories/listings/${listing}`, {
    version: "published"
  });
  const page = data.story;
  let title = `${page.name} | Coris Development Group`;
  if (page.content.metatags !== "") {
    const metaTitle = page.content.metatags.title;
    title = metaTitle !== "" ? metaTitle : page.name;
    page.content.metatags.title = `${title} | Coris Development Group`;
  }
  const meta = {
    title,
    description: page.content.metatags?.description
  };
  const item = page.content;
  const details = [...item.details].shift();
  const listingUrl = [...item.listing_url].shift();
  const price = [...item.price].shift();
  const propertyAddress = () => {
    let address2 = "";
    let county2 = "";
    item.property_address.map((item2) => {
      const line2 = item2.line_2 !== "" ? ` ${item2.line_2}` : item2.line_2;
      address2 = `${item2.line_1}${line2}, ${item2.city}, ${item2.state}  ${item2.zipcode}`;
      county2 = item2.county;
    });
    return { address: address2, county: county2 };
  };
  const { address, county } = propertyAddress();
  const propertyHeaderDetails = () => {
    const list = {
      bedrooms: `${details.bedrooms} Bedroom`,
      fullBaths: details.full_baths !== "" ? ` | ${details.full_baths} Full Baths` : "",
      halfBaths: details.half_baths !== "" ? ` | ${details.half_baths} Half Baths` : "",
      sqft: details.square_feet !== "" ? ` | ${details.square_feet} sqft` : ""
    };
    return Object.values(list);
  };
  const zoning = {
    zone_type: item.zone_type,
    zone_area: item.zone_area
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metaTags": meta, "data-astro-cid-iegw6quc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-iegw6quc> <article${spreadAttributes(xe(page.content), void 0, { "class": "astro-iegw6quc" })} data-astro-cid-iegw6quc> ${page.content.featured_media?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok, "data-astro-cid-iegw6quc": true })}`;
  })} <div class="property-header p-8" data-astro-cid-iegw6quc> <div class="max-contain mx-auto text-golden-400 font-light" data-astro-cid-iegw6quc> <div class="header flex max-sm:flex-col justify-between" data-astro-cid-iegw6quc> <h1 class="text-4xl md:text-5xl capitalize font-normal max-sm:pb-2" data-astro-cid-iegw6quc> ${page.name} </h1> <div class="md:mx-4 h-full sm:justify-items-end" data-astro-cid-iegw6quc> <button class="flex rounded-sm sm:mx-1 px-4 py-1 mt-1 md:py-2 mb-2 text-xs md:text-sm border border-golden-400 h-full sm:w-full text-golden-400 capitalize" data-astro-cid-iegw6quc> <p${spreadAttributes(xe(details), void 0, { "class": "astro-iegw6quc" })} data-astro-cid-iegw6quc>${details.category} | </p><span class="text-green-500 pl-1" data-astro-cid-iegw6quc> ${item.status} </span> </button> </div> </div> <p${spreadAttributes(xe(price))} class="text-2xl md:text-4xl pt-4 pb-2" data-astro-cid-iegw6quc> ${price.text} </p> <p${spreadAttributes(xe(details))} class="text-xl md:text-3xl pb-4 max-sm:w-3/4" data-astro-cid-iegw6quc> ${propertyHeaderDetails} </p> ${item.listing_url && renderTemplate`<div${spreadAttributes(xe(listingUrl))} class="my-4 rounded-lg flex md:w-3/4 lg:w-1/3" data-astro-cid-iegw6quc> <a${addAttribute(listingUrl.url.url, "href")} target="_blank" class="glow text-center w-full rounded-lg px-12 py-3 transition duration-300 ease-in-out border border-golden-500 hover:bg-golden-500 hover:text-white" data-astro-cid-iegw6quc> ${listingUrl.text} </a> </div>`} </div> </div> <div class="property-description bg-white p-8" data-astro-cid-iegw6quc> <div class="max-contain mx-auto" data-astro-cid-iegw6quc> <!-- Description --> <div class="lg:w-3/4 font-light" data-astro-cid-iegw6quc> <h2 class="text-4xl uppercase font-semibold" data-astro-cid-iegw6quc>
Property Description
</h2> <hr class="my-2" data-astro-cid-iegw6quc> ${page.content.property_description?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok, "data-astro-cid-iegw6quc": true })}`;
  })} </div> <!-- Key Details: 2 column --> ${page.content.details?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok, "address": propertyAddress(), "zoning": zoning, "data-astro-cid-iegw6quc": true })}`;
  })} <!-- Image Gallery --> ${page.content.image_gallery?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok, "data-astro-cid-iegw6quc": true })}`;
  })} <!-- Content Section --> ${page.content.content_other?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok, "data-astro-cid-iegw6quc": true })}`;
  })} </div> </div> </article> </main> ` })} `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/listings/[listing].astro", void 0);
const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/listings/[listing].astro";
const $$url = "/listings/[listing]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$listing,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
