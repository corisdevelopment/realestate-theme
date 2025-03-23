import { L as Le, E as Ee } from '../chunks/Footer_Z0x7l_nH.mjs';
import { d as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
import { $ as $$StoryblokComponent } from '../chunks/StoryblokComponent_DtLUG-V5.mjs';
import { $ as $$Layout } from '../chunks/Button_CuWxHUZa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://corisdevelopmentgroup.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let story = null;
  const liveStory = await Le(Astro2);
  if (liveStory) {
    story = liveStory;
  } else {
    const sbApi = Ee();
    const { data } = await sbApi.get("cdn/stories/home", {
      version: "draft",
      resolve_links: "url",
      resolve_relations: "heroStyleTwo.listing"
    });
    story = data?.story;
  }
  const content = story.content;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metaTags": content.metatags }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${content.hero?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })} ${content.about?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })} ${content.services?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })} ${content.property?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })} ${content.imageGallery?.map((blok) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })} </main> ` })} `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/index.astro", void 0);

const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
