import { E as Ee } from '../chunks/Footer_Z0x7l_nH.mjs';
import { c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Button_CuWxHUZa.mjs';
import { $ as $$StoryblokComponent } from '../chunks/StoryblokComponent_DtLUG-V5.mjs';
export { renderers } from '../renderers.mjs';

async function getStaticPaths() {
  const storyblokApi = Ee();
  const { data } = await storyblokApi.get("cdn/stories/listings", {
    content_type: "page",
    version: "published",
    resolve_links: "url"
  });
  const pages = data.stories;
  const paths = pages.map((page) => {
    return {
      params: { listings: page.slug },
      props: { page }
    };
  });
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const sbApi = Ee();
  const { data } = await sbApi.get("cdn/stories/listings/", {
    version: "published"
  });
  const page = data.story;
  let title = `${page.name} | Coris Development Group`;
  if (page.content?.metatags !== "") {
    const metaTitle = page.content.metatags.title;
    title = metaTitle !== "" ? metaTitle : page.name;
    page.content.metatags.title = `${title} | Coris Development Group`;
  }
  const meta = {
    title,
    description: page.content.metatags?.description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metaTags": meta }, { "default": ($$result2) => renderTemplate`${page.content.body?.map((blok) => {
    if (blok.component === "heroBlok") {
      return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
    }
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })}` })}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/listings/index.astro", void 0);
const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/listings/index.astro";
const $$url = "/listings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
