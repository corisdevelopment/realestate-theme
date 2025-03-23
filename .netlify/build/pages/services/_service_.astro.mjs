import { E as Ee } from '../../chunks/Footer_Z0x7l_nH.mjs';
import { d as createAstro, c as createComponent, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Button_CuWxHUZa.mjs';
import { $ as $$StoryblokComponent } from '../../chunks/StoryblokComponent_DtLUG-V5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://corisdevelopmentgroup.com");
async function getStaticPaths() {
  const sbApi = Ee();
  const { data } = await sbApi.get("cdn/stories", {
    starts_with: "services",
    version: "published"
  });
  const stories = Object.values(data.stories);
  const paths = stories.map((story) => {
    return {
      params: { service: story.slug }
    };
  });
  return paths;
}
const $$service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$service;
  const sbApi = Ee();
  const { service } = Astro2.params;
  const { data } = await sbApi.get(`cdn/stories/services/${service}`, {
    version: "published"
  });
  const page = data.story;
  let title = page.name + " | Coris Development Group";
  if (page.content.metatags != "") {
    const metaTitle = page.content.metatags.title;
    title = metaTitle != "" ? metaTitle : page.name;
    page.content.metatags.title = title + " | Coris Development Group";
  }
  const meta = {
    title,
    description: page.content.metatags?.description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metaTags": meta }, { "default": ($$result2) => renderTemplate`${page.content.body?.map((blok) => {
    if (blok.component === "heroBlok" || blok.component === "heroSection") {
      return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
    }
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })}` })}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/services/[service].astro", void 0);
const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/services/[service].astro";
const $$url = "/services/[service]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$service,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
